import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Share/Loading';
import MyprofileData from '../hooks/myProfileData';



const MyProfile = () => {
  const [data] = MyprofileData()
  const [user] = useAuthState(auth)
  


  return (
    <div className=' mx-auto w-full  justify-between sm:mt-20 mt-8 mb-3'>
      
    <div className="card w-[320px] md:w[400px] lg:w-[460px] bg-base-100 shadow-2xl mx-auto ">
      <h3 className='text-center mt-3 text-3xl text-black '>🌹 My Profile 🌹</h3>
<div className="card-body items-center text-center">
<h2 className="card-title">Name:{data?.user}</h2>
 <h2 className="card-title">Email: {data?.email}</h2> 
 <h2 className="card-title">Address: {data?.address}</h2>
 <h2 className="card-title">Number: {data?.number}</h2>
 <h2 className="card-title">Education: {data?.education}</h2>
 {
  !user ? <button disabled className='btn btn-primary text-black'><Link to='/login'>Please Login</Link></button> :
      <button className='btn btn-primary'><Link to='/dashboard/updatemyprofile'>ADD OR Update Your Profile</Link></button>
 }
 
</div>

</div>
</div >

  );
};

export default MyProfile;