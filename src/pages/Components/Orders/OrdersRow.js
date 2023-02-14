import React, { useEffect, useState } from 'react';

const OrdersRow = ({order , handleDelete,updateStatus}) => {
    const {_id ,price,customerName,serviceId,serviceName,message,status}  = order;
    const [orderImg, setOrderImg] = useState({});
    console.log(orderImg.image);

    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then( data => setOrderImg(data))
    } ,[serviceId]);

    

    return (
        <tr>
              <th>
                <button onClick={()=> handleDelete(_id)}  className='btn btn-accent' >X</button>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={orderImg.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{customerName}</div>
                    <div className="text-sm opacity-50">{serviceId}</div>
                  </div>
                </div>
              </td>
              <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm text-accent">
                  ${price}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
              </th>
              <td><button onClick={()=> updateStatus(_id)} className={status ? 'btn btn-success' : 'btn btn-accent'} >{ status ? <span className='text-white'>{status}</span> :  'Pending'}</button></td>
            </tr>
    );
};

export default OrdersRow;