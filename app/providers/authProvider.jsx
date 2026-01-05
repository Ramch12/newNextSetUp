"use client";
import { Children, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, clearAuth } from "@/app/store/slices/auth.slice";

const AuthProvider = ({ children }) => {
  const session = useSession();
  console.log("AuthProvider Session", session);
  const dispatch = useDispatch();

  const { status, data } = session;
  useEffect(() => {
    if (status === "authenticated" && session) {
      dispatch(
        setAuth({
          token: data.backendToken,
          user: data.user,
          role: data.user.role,
        })
      );
    }
  }, [data, dispatch, status]);
  return children;
};

export default AuthProvider;
