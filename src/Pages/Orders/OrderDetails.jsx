import React, { useEffect, useState } from 'react';

const OrderDetails = ({ order, handleDelete }) => {
  const { serviceName, customer, phoneNumber, price, service, email, _id } = order;
  const [serv, setServ] = useState({})
  useEffect(() => {
    fetch(`https://car-solution-server.vercel.app/services/${service}`)
      .then(res => res.json())
      .then(data => setServ(data))
  })

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-lg w-20 h-20">
                <img src={serv?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">Price: ${price}</div>
            </div>
          </div>
        </td>
        <td>
          {customer}
          <br />
          <span className="badge badge-ghost badge-sm">{phoneNumber}</span>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <td>{email}</td>
        <td><button onClick={() => handleDelete(_id)} className='btn btn-ghost font-bold text-2xl' type="submit">X</button></td>
      </tr>
    </>
  );
};

export default OrderDetails;