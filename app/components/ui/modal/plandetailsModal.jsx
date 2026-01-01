import { useQuery } from "@tanstack/react-query";
import { createOrder, createPaymentLink } from "../../../services/plan.service";
import { CURRENT_CONTANT } from "../../../constants/index";
import { OrderSummarySkeleton } from "../../loaders/index";

const OrderDetailsModel = ({ closeModal, ...restProps }) => {
  console.log("Props value=====>", restProps);
  const { error, isLoading, data } = useQuery({
    queryKey: ["createOrder"],
    queryFn: async () => createOrder(restProps),
    refetchOnMount: "always",
  });

  const handlegenerateLink = async (orderId) => {
    const data = await createPaymentLink(orderId);
    window.location.href = data.paymentUrl
  };

  const handleModalClose = () => {
    closeModal();
  };

  return (
    <div className="w-full h-full border border-solid border-balck rounded-md p-2">
      {isLoading ? (
        <OrderSummarySkeleton />
      ) : (
        <div>
          <div className="w-full h-15 border-b">
            <p className="font-semibold text-xs">Total Order</p>
            <p className="font-semibold pl-2">
              <span>{CURRENT_CONTANT[data.orderInfo.currency]}</span>
              <span className="text-2xl">{data.orderInfo.amount}</span>
            </p>
          </div>
          <div className="mt-4 h-24 border bg-gray-300 rounded-md p-2">
            <div className="flex justify-between w-full text-xs items-center font-semibold">
              <div className="flex justify-between w-[55%] items-center">
                <button className="bg-[#cbd0d8]  font-semibold rounded-xs p-2 shadow-2xl">
                  Order Generated
                </button>
                <div>
                  <span>ORDER_ID</span>
                  <span className="ml-1">{data.orderInfo.orderId}</span>
                </div>
              </div>
              <div className="flex-1 text-end">
                <button>Order Created</button>
              </div>
            </div>
            <div className="text-md mt-2">
              <p className="text-start">{data.orderInfo.planId.description}</p>
            </div>
          </div>
          <div className="w-full mt-2">
            <ul className="grid grid-cols-[1fr_auto] gap-y-2 font-semibold px-2">
              <li>Total Amount</li>
              <li>{data.orderInfo.amount}</li>
              <li>GST</li>
              <li>$10</li>
              <li>Service tax</li>
              <li>$20</li>
              <li>Gevernmenr fund</li>
              <li>$20</li>
              <li>Curreny Code</li>
              <li>{CURRENT_CONTANT[data.orderInfo.currency]}</li>
              <li>Prcessor</li>
              <li className="text-purple-500">Razor Pay</li>
            </ul>
          </div>
          <div className="w-full flex justify-between items-center flex-col mt-30 h-24">
            <div className="w-full">
              <button
                onClick={() => {
                  handlegenerateLink(data.orderInfo.orderId);
                }}
                className="bg-black text-white p-2 w-full rounded-md cursor-pointer"
              >
                Proceed to pay
              </button>
            </div>
            <div className="w-full">
              <button
                onClick={handleModalClose}
                className="bg-white text-black w-full border p-2 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsModel;
