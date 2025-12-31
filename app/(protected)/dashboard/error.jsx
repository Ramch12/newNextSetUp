"use client";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

const customErrorHandler = ({ error, reset }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h3>Some error incounter while visiting the profile page</h3>
      <p>Erro is {error.message}</p>
      <button onClick={reload} className="cursor-pointer">
        Refresh to resolve the error
      </button>
    </div>
  );
};

export default customErrorHandler;
