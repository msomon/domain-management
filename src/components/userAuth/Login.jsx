import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Share/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register,watch, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
    const [token]  = useToken(user || gUser);
    
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    
if(token){

    navigate( from, { replace: true });
}
        
   

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const resetPassword = async()=>{
        const email = watch('email');
        await sendPasswordResetEmail(email);
       
      }



    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div>
        <div className='flex justify-center items-center lg:mt-5 lg:mb-12 sm:mt-2 mb-5 '>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body  pt-1 ">
                    <h2 className="text-center text-2xl font-bold mt-0 pt-0">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control  w-full max-w-xs mb-3 ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mb-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn bg-black w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p className='mt-2'>Forget password ? <span className='text-primary cursor-pointer' onClick={resetPassword}>Reset password </span></p>
                    <p>New User ?? <Link className='text-primary' to="/signup">Create New Account</Link></p>
                    <div className="divider mt-0">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary "
                    >Continue with Google</button>
                </div>
            </div>
        </div >
            <div className='card w-52 bg-base-100 shadow-xl grid justify-center items-center mx-auto p-3'>  
                <h1 className='text-2xl text-center '>Admin</h1>
                <h1 className='text-xl text-center '>testing@gmail.com </h1>
                <h1 className='text-xl text-center '>123456</h1>
            </div>
        </div>
    );
};

export default Login;