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
        <aside className="w-[25%] border border-black rounded-md overflow-hidden">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 border border-black rounded-md overflow-hidden">
          <div>
            
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
