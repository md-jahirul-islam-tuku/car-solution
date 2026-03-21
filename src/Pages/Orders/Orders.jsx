import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/userContext";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5001/orders?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [email]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Make sure you delete this order.");
    if (proceed) {
      fetch(`http://localhost:5001/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("This order deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
          console.log(data);
        });
    }
  };
  return (
    <div className="h-[100vh] pt-32 lg:px-20">
      <h1 className="text-3xl font-semibold mb-4">
        Your have {orders.length} orders
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Orders</th>
              <th>Customer</th>
              <th>Message</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-red-100 divide-y dark:divide-primary/30">
            {orders.map((order) => (
              <OrderDetails
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></OrderDetails>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <div>
            <h1 className="text-xl text-center mt-5 text-red-600">
              There are no orders of you
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
