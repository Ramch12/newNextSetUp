import AuthWrapper from "../components/AuthWrapper";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
export default async function ProtectedLayout({ children }) {
  console.log("dashboard layout");
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return <div>{children}</div>;
}
