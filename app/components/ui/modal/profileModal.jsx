import LogoutButton from "../../LogoutButton";
import Link from "next/link";
const ProfileModal = ({ closeModal }) => {
  const handleMenuClick = () => {
    closeModal();
  };
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
          className="cursor-pointer rounded-sm p-1 hover:bg-[#acbfe7]"
          onClick={handleMenuClick}
        >
          My Account
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#acbfe7]">
          Settings
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#acbfe7]">
          Notifications
        </li>
        <li
          className="flex justify-between items-center rounded-sm p-1 hover:bg-[#acbfe7] w-full"
          onClick={handleMenuClick}
        >
          <div className="w-full">
            <p>Current Plan</p>
            <span className="text-amber-600">Pro</span>
          </div>
          <Link
            href="/dashboard/plans"
            className="inline-block w-full cursor-pointer bg-amber-600 rounded-md p-2 text-center text-white"
          >
            Change Plan
          </Link>
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#acbfe7]">
          Request a feature
        </li>
        <li className="cursor-pointer text-red-600">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
