import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import google from '../../assets/icons/google.png'
import { AuthContext } from '../../Contexts/userContext';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const { userSignUp, auth } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    userSignUp(email, password)
    .then(result => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
      console.log(result.user)
    })
    .then(error => console.error(error))
    form.reset()
  }

  return (
    <div className="h-[100vh] flex pt-10">
      <div className="w-1/2 my-auto flex justify-end mr-20">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2 my-auto">
        <div  className="card-body w-3/5 bg-gray-100 shadow-xl rounded-xl">
          <h1 className='text-3xl font-bold pt-10 pb-5'>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input name='name' type="text" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo URL</span>
              </label>
              <input name='photo' type="text" placeholder="photo URL" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg font-bold">Sing Up</button>
            </div>
          </form>
          <div>
            <h1 className='mt-2 font-semibold'>Or Sign Up with</h1>
            <Link to='/login' className="text-primary font-semibold flex justify-center my-2"><img src={google} alt="google" className='h-10 p-1 rounded-full bg-slate-200' /></Link>
          </div>
          <div>
            Already have an account?
            <Link to='/login' className="text-primary font-semibold"> Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;