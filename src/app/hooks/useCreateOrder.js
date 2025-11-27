import { useState } from "react";
import { createOrder } from "../../api/ordersApi";

export default function useCreateOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitOrder = async (orderData) => {
    setLoading(true); 
    setError(null);
    console.log("היידההה");


    try {
      const response = await createOrder(orderData);
      return response.data;
    } catch (err) {
      setError(err);
      console.error("Error creating order:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitOrder,
    loading,
    error,
  };
}

