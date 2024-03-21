import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import useAdmin from '../hooks/useAdmin';


const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register,reset,formState: { errors }, handleSubmit } = useForm();
   const [rating, setRating] = useState(4);
   const [imageUrl,setImageUrl] = useState("")

const admin = useAdmin(user)


console.log(imageUrl);

  const onSubmit = data => {


    const review = {
      email :user?.email ,
      review : rating ,
      customer_name:data.name ,
      image:imageUrl ,
      comment : data.comment
    }
    

    axios.post('http://localhost:5000/addreview',review)
    .then(res=> {
        if(res.data.insertedId){
            reset()
            toast.success('Review add successfully')
        }
   
    } )
    
}




const uploadImage =(data)=>{
    const image = data.target.files[0]
    const formData = new FormData()

    formData.set("image",image);

  axios.post("https://api.imgbb.com/1/upload?key=900dac96ec3c7e9b2a1e46420fe469ce",formData).then((res)=>{
   setImageUrl(res.data.data.display_url)
  })


  }


  return (

    <div className='h-screen lg:mt-20 mt-10  sm:mt-24'>
    <div className=' mx-auto card h-[550px] max-w-lg min-w-80 bg-base-100 shadow-xl px-6 my-8 pb-10 flex justify-center items-center'>
      <h1 className='mt-3 text-2xl mb-4 text-black'> 👍 Please Add Review 👍 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">User Email</span>
  </label>
      <input  type="text" readOnly value={user?.email} placeholder="User Email" className="input input-bordered w-full max-w-xs" />
    
      <label className="label">


    <span className="label-text">Rating</span>
  </label>



<Rating className=' gap-2'
      style={ {maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    />
    


  

      <label className="label">
      <span className="label-text">Name</span></label>
      <input {...register("name")} type="text" placeholder="Type here Name" className="input input-bordered w-full max-w-xs" required />
      <label className="label">

      <span className="label-text">Comment</span></label>
      <input {...register("comment")} type="text" placeholder="Type here description" className="input input-bordered w-full max-w-xs" required />


      <label className="label mt-4 btn btn-success justify-center"  htmlFor='image' >Upload Image</label>
      <input  onChange={uploadImage} id='image' type="file" placeholder="Type here Photo Url" className="input input-bordered w-full hidden max-w-xs " />
     
     {
      user && 
       <input disabled={!imageUrl || !admin ? true : false} className='btn btn-md btn-primary w-40 mx-auto mb-8 mt-4 ' type="submit" value='Add Review' /> 

     }

    </form>
    </div>
    </div>
  );
};

export default AddReview;