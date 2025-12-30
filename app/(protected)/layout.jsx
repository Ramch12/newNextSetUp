import AuthWrapper from "../components/AuthWrapper";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import Sidebar from "../components/sidebar";
export default async function ProtectedLayout({ children }) {
  console.log("dashboard layout");
  const session = await auth();
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="flex p-6 h-screen gap-4">
        {/* Sidebar */}
        {/* bg-[#10172a] use this for backgroud color */}
        <aside className="w-[20%] border border-black rounded-md overflow-hidden">
          <Sidebar />
        </aside>

        {/* Main Content */}
        {/* bg-[#10172a] use this for backgroud color */}
        <main className="flex-1 border border-black rounded-md overflow-hidden  text-cyan-400">
          {children}
        </main>
      </div>
    </div>
  );
}
