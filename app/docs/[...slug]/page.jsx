"use client";
import React from "react";
import { useParams } from "next/navigation";

const DocsPage = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <div className="border border-black text-center mx-3 rounded-xl bg-amber-200">
      <h3 className="text-2xl font-semibold p-3">
        {`You are seeing the docs page`}
      </h3>
    </div>
  );
};

export default DocsPage;
