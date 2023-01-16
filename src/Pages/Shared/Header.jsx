import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';
import logo from '../../assets/logo.png'

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => { }).catch(err => console.error(err))
  }
  const menu = <>
    <li className='font-semibold'><Link to="/" >Home</Link></li>
    <li className='font-semibold'><Link to="/">About</Link></li>
    <li className='font-semibold'><Link to="/">Services</Link></li>
    <li className='font-semibold'><Link to="/">Products</Link></li>
    <li className='font-semibold'><Link to="/">Used Car</Link></li>
    <li className='font-semibold'><Link to="/orders">Orders</Link></li>
    {
      user ? <li className='font-semibold'><Link onClick={handleSignOut} to="/" >Sign out</Link></li> :
        <li className='font-semibold'><Link to="/login" >Login</Link></li>
    }
  </>
  return (
    <div>
      <div className="navbar py-5 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost"><img src={logo} alt="" className='h-14'/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/' className="btn btn-outline btn-primary">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Header;