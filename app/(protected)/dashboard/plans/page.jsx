"use client";
import { plans } from "@/app/constants";
import { useState, useContext } from "react";
import { IoCheckmarkOutline, IoLanguage } from "react-icons/io5";
import Toggle from "@/app/components/common/toggleButton";
import { fetchAvailablePlans } from "@/app/services/plan.service";
import { useQuery } from "@tanstack/react-query";
import { PlanSkalatonLoader } from "@/app/components/loaders/index";
import { useSession } from "next-auth/react";
import { ModalContext } from "@/app/providers/ModalProvider";
import PlanDetailsModel from "@/app/components/ui/modal/plandetailsModal";

const Plans = () => {
  const [changePlanDuration, setChangePlanDuration] = useState(false);
  const { data: session, status } = useSession();
  console.log("status", status)
  const { openModal, closeModal } = useContext(ModalContext);

  const {
    error,
    data: planList,
    isLoading,
  } = useQuery({
    queryKey: ["planData"],
    queryFn: fetchAvailablePlans,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: status === "authenticated" && !!session?.backendToken,
  });

  const onToggle = (value) => {
    setChangePlanDuration(value);
  };

  const handlePlanDetailsShow = (planId) => {
    openModal(
      <PlanDetailsModel
        planId={planId}
        billingCycle={changePlanDuration ? "YEARLY" : "MONTHLY"}
        currency={"INR"}
        paymentMethod={"UPI"}
        closeModal={closeModal}
      />
    );
  };

  const showLoading =
    status === "loading" || (isLoading && status === "authenticated");

  return (
    <div className="p-2">
      <div className="py-2 flex justify-between items-center mr-5">
        <div className="">
          <p>Select a plan that grow your business</p>
        </div>
        <div className="flex justify-between items-center min-w-44">
          <span className="inline-block">Change Duration</span>
          <Toggle onToggle={onToggle} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2 overflow-y-scroll h-180">
        {showLoading
          ? Array.from({ length: 6 }).map((item, index) => {
              return <PlanSkalatonLoader key={index} />;
            })
          : (planList || []).map((plan, index) => {
              return (
                <div
                  key={plan._id}
                  className="border border-solid border-black rounded-lg shadow-sm px-2 py-4 text-center text-black bg-gray-300 mb-4"
                >
                  <p className="text-2xl font-bold border-b pb-2">
                    {plan.name}
                  </p>
                  <p className="mt-2 text-sm">{plan.description}</p>
                  <div className="mt-3 text-center">
                    {/* Price */}
                    <div className="flex justify-center items-start gap-x-1">
                      <span className="text-xl font-semibold text-black/70">
                        $
                      </span>
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
                    <button
                      onClick={() => {
                        handlePlanDetailsShow(plan._id);
                      }}
                      className="font-semibold border border-solid border-black w-full p-2 rounded-sm  bg-blue-400 hover:bg-blue-500 cursor-pointer"
                    >
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
