"use client";
import { BsCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useMe } from "@/app/hooks/userHook";
import { Loader } from "@/app/components/loaders/index";
import CustomButton from "@/app/components/common/button";
import { useRouter } from "next/navigation";

const PlansPurchaseStatus = () => {
  const params = useSearchParams();
  const paymentStatus = params.get("razorpay_payment_link_status");
  const queryClient = useQueryClient();
  const isPaymentDone = paymentStatus === "paid";
  const { data, error, isLoading } = useMe(isPaymentDone);
  const router = useRouter();

  useEffect(() => {
    if (isPaymentDone)
      queryClient.refetchQueries({
        queryKey: ["me"],
      });
  }, [paymentStatus, queryClient]);

  const handleRedirect = (urlPath) => {
    router.push(urlPath);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      {isLoading ? (
        <Loader />
      ) : isPaymentDone ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-y-2">
          <div>
            <BsCheckCircleFill size={50} color="green" />
          </div>
          <p className="text-2xl text-black">Thank you for your purchase</p>
          <p className="text-black">
            Enjoy all your premium services with premium plan
          </p>
          <div className="w-1/2 h-52 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300  text-black p-2">
            <ul className="grid grid-cols-[1fr_auto] gap-y-2 px-2 mt-10">
              <li>Order Id</li>
              <li>{data?.userPlansDetails?.orderId}</li>
              <li>Plan Name</li>
              <li>{data?.userPlansDetails?.planId?.name}</li>
              <li>Plans Amount</li>
              <li>{data?.userPlansDetails?.amount}</li>
            </ul>
            <div className="flex justify-between mt-4">
              <CustomButton
                buttonText="Go to profile"
                customClass={"btn btn-danger"}
                onClick={() => {
                  handleRedirect("/dashboard/profile");
                }}
              />
              <CustomButton
                buttonText="Go To Plans"
                customClass={"btn btn-primary"}
                onClick={() => {
                  handleRedirect("/dashboard/plans");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center flex-col gap-y-2">
          <div>
            <ImCross size={50} color="red" />
          </div>
          <p className="text-2xl text-black">Plan purchase has beed failed</p>
          <div className="w-1/2 h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300  text-black p-2">
            <div className="flex justify-between mt-10 w-full">
              <CustomButton
                buttonText="Go to Profile"
                customClass={"btn btn-primary"}
                onClick={() => {
                  handleRedirect("/dashboard/plans");
                }}
              />
              <CustomButton
                buttonText="Purchase again"
                customClass={"btn btn-primary w-auto"}
                onClick={() => {
                  handleRedirect("/dashboard/plans");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansPurchaseStatus;
