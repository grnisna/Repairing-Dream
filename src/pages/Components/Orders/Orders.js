import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Contexts/AuthProvider/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user } = useContext(authContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm("are you sure want to deleted this service from this list?");

    if(proceed){
        fetch(`http://localhost:5000/orders/${id}`,{method:'DELETE'})
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data.deletedCount > 0 ){
                alert('Deleted');
                const remainingOrder = orders.filter(nowOrder => nowOrder._id !== id);
                setOrders(remainingOrder);
            }
        })
    }
}

  return (
    <div>

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
            {
                orders.map(order => <OrdersRow key={order._id} order={order} handleDelete={handleDelete} ></OrdersRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
