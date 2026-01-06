import LogoutButton from "../../LogoutButton";
import Link from "next/link";
import { useMe } from "@/app/hooks/userHook";
import { Loader } from "@/app/components/loaders/index";
import { useMutation } from "@tanstack/react-query";
import { requestRefund } from "@/app/services/plan.service";

const ProfileModal = ({ closeModal }) => {
  const handleMenuClick = () => {
    closeModal();
  };

 const refundMutation = useMutation({
    mutationFn: requestRefund,
    onSuccess: () => {
      alert("Your plan refund initiated successfully!");
    },
    onError: (error) => {
      alert(error.message || "Refund failed");
    },
  });

  const handleRefund = () => {
    refundMutation.mutate();
  };
  
  const { data: userDetails, isLoading, error } = useMe();
  return (
    <div className="border border-silid border-black rounded-md">
      <div className="p-4 border-b flex justify-between">
        <h3 className="font-semibold">Profile</h3>
        <button onClick={() => closeModal(false)} className="cursor-pointer">
          ✕
        </button>
      </div>
      <ul className="p-4 space-y-3">
        <li
          className="cursor-pointer rounded-sm p-2 hover:bg-[#acbfe7] bg-green-200 border"
          onClick={handleMenuClick}
        >
          My Account
        </li>
        <li className="cursor-pointer rounded-sm p-2 hover:bg-[#acbfe7] border bg-green-200">
          Settings
        </li>
        <li className="cursor-pointer rounded-sm p-2 hover:bg-[#acbfe7] border bg-green-200">
          Notifications
        </li>
        <li
          className="flex justify-between items-center rounded-sm p-2 hover:bg-[#acbfe7] w-full border bg-green-200"
          onClick={handleMenuClick}
        >
          <div className="w-full">
            <p>Current Plan</p>
            {isLoading ? (
              <Loader />
            ) : (
              <span className="text-amber-600">
                {userDetails?.userPlansDetails?.planId?.name}
              </span>
            )}
          </div>
          <Link
            href="/dashboard/plans"
            className="inline-block w-full cursor-pointer bg-amber-600 rounded-md p-2 text-center text-white border"
          >
            Change Plan
          </Link>
        </li>
        <li className="cursor-pointer rounded-sm p-2 hover:bg-[#acbfe7] border bg-green-200">
          <button className="w-full h-full text-start cursor-pointer" onClick={handleRefund}>
            Request refund.
          </button>
        </li>
        <li className="cursor-pointer rounded-sm p-2 hover:bg-[#acbfe7] border bg-green-200">
          Request a feature
        </li>
        <li className="cursor-pointer text-red-600 bg-green-200">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
