import LogoutButton from "../../LogoutButton";
import Link from "next/link";
const ProfileModal = ({ closeModal }) => {
  return (
    <div>
      <div className="p-4 border-b flex justify-between">
        <h3 className="font-semibold">Profile</h3>
        <button onClick={() => closeModal(false)}>✕</button>
      </div>
      <ul className="p-4 space-y-3">
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#2563EB]">
          My Account
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#2563EB]">
          Settings
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#2563EB]">
          Notifications
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#2563EB]">
          <Link className="w-full" href={"/dashboard/plans"}>
            Pricing and Plans
          </Link>
        </li>
        <li className="cursor-pointer rounded-sm p-1 hover:bg-[#2563EB]">
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
