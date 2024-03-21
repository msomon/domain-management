
import React from 'react';
import { Link } from 'react-router-dom';
// import footer from '../images/footer1.webp'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <div className='  mt-20 '>



  <footer className=" footer  w-full p-10  text-info  mx-auto mt-3  items-center  ">
    

  <div className='
  mx-auto '>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div className='mx-auto  items-center'>
    <p className="font-bold text-2xl mt-2 text-black">
      Md Sumon Ahamed. <br/> </p> 
      <p className='text-xl'> Web Developer</p>
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title mx-auto ">Social</span> 
    <div className="grid grid-flow-col gap-5 ">
      <Link to="https:www.linkedin.com/in/sumon-ahamed1" target="_blank"><CiLinkedin className='text-4xl' /></Link>
      <Link to="https:www.linkedin.com/in/sumon-ahamed1" target="_blank"><FaFacebook className='text-3xl' /></Link>
      <Link to="" target="_blank"><FaYoutube className='text-4xl' /></Link>
     
    </div> 
  </div>
</footer>
      </div>
    );
};

export default Footer;