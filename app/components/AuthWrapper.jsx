import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
const AuthWrapper = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return <>{children}</>;
};

export default AuthWrapper;
