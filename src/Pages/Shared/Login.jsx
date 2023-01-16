import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import google from '../../assets/icons/google.png';
import { AuthContext } from '../../Contexts/userContext';

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(result => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }

        fetch('http://localhost:5001/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        }).then(res => res.json()).then(data => {
          localStorage.setItem('car-token', data.token)
          navigate(from, { replace: true });
        })
        console.log(user);
      })
      .catch(err => console.error(err))
    form.reset()
  }
  return (
    <div className="h-[100vh] flex">
      <div className="w-1/2 my-auto flex justify-end mr-20">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2 my-auto">
        <form onSubmit={handleLogin} className="card-body w-3/5 bg-gray-100 shadow-xl rounded-xl">
          <h1 className='text-3xl font-bold pt-10 pb-5'>Please Login</h1>
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
              <div className='flex'>
                <p>Forget password?</p>
                <button className='ml-2 text-primary font-bold'>Reset</button>
              </div>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-lg font-bold">Login</button>
          </div>
          <div>
            <h1 className='mt-2 font-semibold'>Or Log in with</h1>
            <Link to='/login' className="text-primary font-semibold flex justify-center my-2"><img src={google} alt="google" className='h-10 p-1 rounded-full bg-slate-200' /></Link>
          </div>
          <div>
            Don't have an account?
            <Link to="/login/signUp" className="text-primary font-semibold"> Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;