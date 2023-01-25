import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => { }).catch(err => console.error(err))
  }
  const menu = <>
    <li className='font-semibold'><Link to="/" >Home</Link></li>
    <li className='font-semibold'><AnchorLink href="#services">Services</AnchorLink></li>
    <li className='font-semibold'><AnchorLink href="#products">Products</AnchorLink></li>
    <li className='font-semibold'><AnchorLink href="#about">About</AnchorLink></li>
    <li className='font-semibold'><AnchorLink href="#usedCar">Car Sale</AnchorLink></li>
    <li className='font-semibold'><AnchorLink href="#contact">Contact</AnchorLink></li>
    {
      user ? <li className='font-semibold'><Link to="/orders">Orders</Link></li> : <li className='font-semibold'><Link to="/login">Orders</Link></li>
    }
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
              <GiHamburgerMenu className='h-7 w-7'/>
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
          <Link to='/login' className="btn btn-outline btn-primary">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;