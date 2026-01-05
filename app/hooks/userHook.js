import { getUserPlanDetails } from "../services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useMe = (enabled = true) => {
  const session = useSession();
  const { status } = session;
  return useQuery({
    queryKey: ["me"],
    queryFn: getUserPlanDetails,
    staleTime: 0,
    enabled: status === "authenticated" && enabled,
    staleTime: 0,
  });
};
