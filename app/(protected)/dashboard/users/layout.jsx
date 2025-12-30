export default function UsePageLayout({ children }) {
  return (
    <div className="p-3">
      <div className="h-14 w-full border border-solid border-black flex items-center justify-center font-semibold text-xl rounded-sm">
        <div>
          <h3>User page to manage the user</h3>
        </div>
      </div>
      <div className="w-full border border-solid border-black rounded-sm mt-2 p-3">
        {children}
      </div>
    </div>
  );
}
