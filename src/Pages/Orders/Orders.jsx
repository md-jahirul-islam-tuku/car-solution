import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/userContext';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, userSignOut } = useContext(AuthContext)
  useEffect(() => {
    fetch(`https://car-solution-server.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut()
        }
        return res.json()
      })
      .then(data => {
        setOrders(data)
      })
  }, [user?.email, userSignOut])
  const handleDelete = id => {
    const proceed = window.confirm('Make sure you delete this order.')
    if (proceed) {
      fetch(`https://car-solution-server.vercel.app/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('This order deleted successfully');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
          console.log(data)
        })
    }
  }
  return (
    <div className='h-[100vh] pt-32 lg:px-20'>
      <h1 className='text-3xl font-semibold mb-4'>Your have {orders.length} orders</h1>
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
          <tbody>
            {
              orders.map(order => <OrderDetails
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></OrderDetails>)
            }
          </tbody>
          <tfoot>
            <tr>
              <th>Orders</th>
              <th>Customer</th>
              <th>Message</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Orders;