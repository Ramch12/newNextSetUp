"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import api from "@/app/config/axios";

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
        if (tokenRef.current) {
          config.headers.Authorization = `Bearer ${tokenRef.current}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(interceptor);
    };
  }, []);

  return children;
}
