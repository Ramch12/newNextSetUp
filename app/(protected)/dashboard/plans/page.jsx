"use client";
import { plans } from "@/app/constants";
import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import Toggle from "@/app/components/common/toggleButton";

const Plans = () => {
  const [changePlanDuration, setChangePlanDuration] = useState(false);
  const onToggle = (value) => {
    setChangePlanDuration(value);
  };
  return (
    <div className="p-3">
      <div className="border border-solid border-black h-24 w-full rounded-sm flex justify-center items-center shadow-xl">
        <h3 className="text-center leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Select a suitable Plans that help to grow your business
        </h3>
      </div>
      <div className="py-2 flex justify-end items-center mr-5">
        <div className="flex justify-between items-center min-w-44">
          <span className="inline-block">Change Duration</span>
          <Toggle onToggle={onToggle} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2 overflow-y-scroll h-132">
        {plans.map((plan) => {
          return (
            <div
              key={plan.id}
              className="border border-solid border-black rounded-lg shadow-sm px-2 py-4 text-center text-black bg-gray-300 mb-4"
            >
              <p className="text-2xl font-bold border-b pb-2">{plan.name}</p>
              <p className="mt-2 text-sm">{plan.description}</p>
              <div className="mt-3 text-center">
                {/* Price */}
                <div className="flex justify-center items-start gap-x-1">
                  <span className="text-xl font-semibold text-black/70">$</span>
                  <span className="text-5xl font-bold text-black">
                    {changePlanDuration
                      ? plan.yearlyAmount
                      : plan.monthlyAmount}
                  </span>
                </div>

                {/* Meta info */}
                <div className="mt-2 flex justify-center gap-x-1 text-xs text-black/70">
                  <span className="inline-flex items-center gap-x-1">
                    <span>Billed</span>
                    <span className="font-semibold">
                      {changePlanDuration ? "Yearly" : "Monthly"}
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-x-1">
                    <span className="font-semibold">{plan.maxUsers}</span>
                    <span>Max active users</span>
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <button className="font-semibold border border-solid border-black w-full p-2 rounded-sm  bg-blue-400 hover:bg-blue-500 cursor-pointer">
                  Get Started
                </button>
                <ul className="mt-3">
                  {plan.features.map((feature, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-start items-center text-sm"
                      >
                        <span className="mr-2 my-1">
                          <IoCheckmarkOutline color="green" size={20} />
                        </span>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Plans;
