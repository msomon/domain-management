import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';


const UpdateMyProfile = () => {
  
    

  const { register,reset ,formState: { errors }, handleSubmit } = useForm();
  const [user] =useAuthState(auth)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const onSubmit = async (data) => {
    
    const profiledata = {
        user : user?.displayName ,
       email : user?.email ,
       address:data.address ,
       number : data.number ,
       education: data.education
   }

  
  axios.put(`http://localhost:5000/user/myprofile/${user.email}`, profiledata)
   .then(res=>{

    if(res.data.acknowledged ){

        
        reset()
          toast('Update Profile Successfully')
          navigate( from, { replace: true });

    }
    
    })   
}


  return (
    <div className='mx-auto  mb-6 mt-0sm:mt-20 '>
    <div className="card w-80 lg:w-2/4 justify-center bg-base-100 shadow-2xl mx-auto">
        <div className="card-body mx-auto pt-2 ">
            <h2 className="text-center text-green-400 text-xl font-bold mt-0 mb-1 mt-4">✔ Please Submit Your Information ✔</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control  max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs" 
                        value={user?.displayName} readOnly
                    />
                    
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        value={user?.email}
                        readOnly
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Number is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Order Education"
                        className="input input-bordered w-full max-w-xs mb-2" 
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Order is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                
                  </label>
            
                </div>
                <input   className='btn bg-black w-full max-w-xs text-white mt-2' type="submit" value="Submit" /> 
        
            </form>
        </div>
    </div>

    </div>
  );
};

export default UpdateMyProfile;