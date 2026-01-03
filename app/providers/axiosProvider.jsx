"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import api from "@/app/config/axios";
import { signOut } from "next-auth/react";

export function AxiosProvider({ children }) {
  const { data: session, status } = useSession();
  const tokenRef = useRef(null);

  // Update the ref whenever session changes
  useEffect(() => {
    tokenRef.current = session?.backendToken || null;
  }, [session?.backendToken]);

  // Set up the interceptor ONCE

  useEffect(() => {
    const interceptor = api.interceptors.request.use(
      (config) => {
        console.log("interceptor request hit!");
        if (tokenRef.current) {
          config.headers.Authorization = `Bearer ${tokenRef.current}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error?.response?.status === 401) {
          console.log("JWT expired- logging out");
          await signOut({
            callbackUrl: "/login",
          });
        }
        Promise.resolve(error);
      }
    );
    return () => {
      api.interceptors.request.eject(interceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
}
