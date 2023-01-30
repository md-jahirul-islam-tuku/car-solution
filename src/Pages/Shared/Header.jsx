import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';

const Header = () => {
  const [view, setView] = useState(true);
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => { }).catch(err => console.error(err))
  }
  const menu = <>
    {
      view?
        <li className='font-semibold'>
          <Link tabIndex={0} className='uppercase justify-between' to="/" >Home
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
          </Link>
          <ul className="p-2 z-10 bg-white">
            <li className='font-semibold'><AnchorLink className='uppercase' href="#services">Services</AnchorLink></li>
            <li className='font-semibold'><AnchorLink className='uppercase' href="#products">Products</AnchorLink></li>
            <li className='font-semibold'><AnchorLink className='uppercase' href="#about">About</AnchorLink></li>
            <li className='font-semibold'><AnchorLink className='uppercase' href="#usedCar">Car Sale</AnchorLink></li>
            <li className='font-semibold'><AnchorLink className='uppercase' href="#contact">Contact</AnchorLink></li>
          </ul>
        </li> : 
        <li className='font-semibold'><Link className='uppercase' to="/">Home</Link></li>
    }
    {
      user ? <li className='font-semibold'><Link className='uppercase' to="/orders">Orders</Link></li> : <li className='font-semibold'><Link className='uppercase' to="/login">Orders</Link></li>
    }
    {
      user ? <li className='font-semibold'><Link className='uppercase' onClick={handleSignOut} to="/" >Sign out</Link></li> :
        <li className='font-semibold'><Link onClick={() => setView(false)} className='uppercase' to="/login">Login</Link></li>
    }
  </>
  return (
    <div className='lg:w-[1024px] xl:w-[1280px] mx-auto'>
      <div className="navbar py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className='h-7 w-7' />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost"><img src={logo} alt="" className='h-14' /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn btn-outline btn-primary">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;