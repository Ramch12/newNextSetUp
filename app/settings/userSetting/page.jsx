import react from "react";

function UserSetting() {
  return (
    <div className="w-full h-screen">
      {/* Header */}
      <div className="border border-black text-center mx-3 rounded-xl bg-amber-200">
        <h3 className="text-2xl font-semibold p-3">
          This is User setting page
        </h3>
      </div>

      {/* Content */}
      <div className="border-2 border-black mx-3 rounded-xl mt-2 font-semibold min-h-screen">
        <h3 className="text-center text-2xl">
          All User setting content will go here
        </h3>
      </div>
    </div>
  );
}

export default UserSetting;
