import api from "../config/axios";

export const getUsers = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const getUserPlanDetails = async () => {
  try {
    const { data } = await api.get("/user/me");
    return data;
  } catch (error) {
    console.log("Errors", error);
  }
};
