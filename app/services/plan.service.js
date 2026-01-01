import api from "../config/axios";

const fetchAvailablePlans = async () => {
  try {
    const { data } = await api.get("/plan/get-plan-list");
    return data.plans || [];
  } catch (error) {
    throw error;
  }
};

const createOrder = async (props) => {
  try {
    const { data } = await api.post("/plan/create-order", props);
    return data;
  } catch (error) {
    console.log("Error while creating the order", error);
  }
};

const createPaymentLink = async (orderId) => {
  try {
    const { data } = await api.post("/plan/create-payment-link", {orderId});
    return data
  } catch (error) {
    console.log("Error while creating paymentLink the order", error);
  }
};

export { fetchAvailablePlans, createOrder, createPaymentLink };
