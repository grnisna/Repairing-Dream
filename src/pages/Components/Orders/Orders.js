import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Contexts/AuthProvider/AuthProvider";
import OrdersRow from "./OrdersRow";

import checkoutImage from "../../../assets/images/checkout/checkout.png";

const Orders = () => {
  const { user } = useContext(authContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure want to deleted this service from this list?"
    );

    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remainingOrder = orders.filter(
              (nowOrder) => nowOrder._id !== id
            );
            setOrders(remainingOrder);
          }
        });
    }
  };

  const updateStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remainingOrder = orders.filter(
            (singleOrder) => singleOrder._id !== id
          );
          const approving = orders.find((ord) => ord._id === id);
          approving.status = "approved";
          const updateOrder = [approving, ...remainingOrder];
          setOrders(updateOrder);
        }
      });
  };

  return (
    <div>
      <div className="relative my-14">
        <img src={checkoutImage} className="w-full" alt="" />
        <h2 className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-5 top-1/2 text-white font-bold text-4xl ">
          Orders
        </h2>
        <h3 className="absolute flex justify-center items-center gap-5 transform -translate-y-1/2 left-5 bottom-0 text-white font-bold text-4xl bg-accent rounded p-5 ">
          Home/orders
        </h3>
      </div>

      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name & ID</th>
              <th>Service Name</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                updateStatus={updateStatus}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
