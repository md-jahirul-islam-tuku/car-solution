import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleCheckout = e => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.fName.value} ${form.lName.value}`
    const phoneNumber = form.phone.value;
    const email = user?.email || 'Unregistered';
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phoneNumber,
      message
    }
    fetch('http://localhost:5001/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          alert('Your order submitted successfully')
          form.reset()
        }
      })
      .catch(err => console.error(err))
  }
  return (
    <div className='pt-32 h-[100vh]'>
      <form onSubmit={handleCheckout} className="card-body w-3/5 mx-auto bg-slate-200 rounded-xl">
        <h1 className='text-xl font-bold'>You are order for: {title}</h1>
        <h1 className='text-lg font-semibold'>Price: ${price}</h1>
        <div className="flex justify-between">
          <div className='w-1/2'>
            <input name='fName' type="text" placeholder="Your first name" className="input input-bordered w-full" />
          </div>
          <div className='w-1/2'>
            <input name='lName' type="text" placeholder="last name" className="input input-bordered w-full" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className='w-1/2'>
            <input name='phone' type="number" placeholder="Phone number" className="input input-bordered w-full" />
          </div>
          <div className='w-1/2'>
            <input name='email' type="email" placeholder='Email' defaultValue={user?.email} className="input input-bordered w-full" readOnly />
          </div>
        </div>
        <div className="form-control">
          <input name='message' type="text" placeholder="Message" className="input input-bordered pb-24 pt-5" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;