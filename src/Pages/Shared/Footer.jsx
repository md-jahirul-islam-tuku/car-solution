import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="footer justify-center lg:justify-around p-10 lg:p-20 text-slate-200">
        <div className='flex flex-col items-center'>
          <img className='h-14' src={logo} alt="" />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </div>
        <div className='pl-14'>
          <span className="footer-title text-primary">Services</span>
          <a href="/" className="link link-hover">Branding</a>
          <a href="/" className="link link-hover">Design</a>
          <a href="/" className="link link-hover">Marketing</a>
          <a href="/" className="link link-hover">Advertisement</a>
        </div>
        <div className='pl-14'>
          <span className="footer-title text-primary">Company</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div className='pl-14'>
          <span className="footer-title text-primary">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <small className='text-white text-xs'>© Md Jahirul Islam Tuku - 2023. All right reserved</small>
    </div>
  );
};

export default Footer;