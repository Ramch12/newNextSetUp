"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/app/services/user.service";

const User = async () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("wait is over now");
  //   }, 5000);
  // });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  console.log("data", data);
  return (
    <div>
      <h3>User page in this {JSON.stringify(data)}</h3>
    </div>
  );
};

export default User;
