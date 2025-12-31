"use client";
import { plans } from "@/app/constants";
import { useState } from "react";

const Plans = () => {
  const [changePlanDuration, setChangePlanDuration] = useState(false);
  return (
    <div className="p-3">
      <div className="border border-solid border-black h-32 w-full rounded-sm flex justify-center items-center">
        <h3 className="text-5xl font-bold">
          Select a suitable Plans that help to grow your business
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {plans.map((plan) => {
          return (
            <div className="border border-solid border-black rounded-lg shadow-sm px-2 py-4 text-center text-black bg-[#a8bfef]">
              <p className="text-2xl font-bold">{plan.name}</p>
              <p className="mt-2 text-lg">{plan.description}</p>
              <div className=" mt-3">
                <p>Curreny symbol</p>
                <p className="text-5xl">
                  {changePlanDuration ? plan.monthlyAmount : plan.yearlyAmount}
                </p>{" "}
                <div className="w-full flex justify-center gap-x-2">
                  <span>
                    Billed {changePlanDuration ? "Monthly" : "Yearly"}
                  </span>
                  <span>Max active {plan.maxUsers} users</span>
                </div>
              </div>
              <button className="font-semibold text-2xl">Get Started</button>
              <ul className="mt-3">
                {plan.features.map((feature) => {
                  return <li className="text-start">{feature}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Plans;
