import axios from 'axios';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddDomain = () => {
  const { register,reset, handleSubmit } = useForm();

   
  const onSubmit =async (data) => {
    
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().slice(0, 10)

    const serviceData = { 

      domainName:data.name ,
      description:data.description ,
      expiryDate:formattedDate,
       price:data.price ,
      
    }

    
     const res = await axios.post("http://localhost:5000/adddomain",serviceData ,{
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
     })
     if(res.data.acknowledged){
       reset()
    
       toast.success('Add Item Succesfully')

     }
    

  }


 


  return (
    <div className='h-80vh items-center mx-auto card max-w-lg min-w-80 bg-base-100 shadow-xl px-6 mt-8 mb-10 sm:mt-20 '>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 🎁 Please Add Domain 🎁 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">Domain Name</span>
  </label>
      <input {...register("name")}  type="text" placeholder="Type here Domain name" className="input input-bordered w-full max-w-xs" /> <input/>


      <label className="label">
    <span className="label-text">Domain Price</span>
  </label>

      <input {...register("price")} type="number" placeholder="Type here price" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Domain Description</span>
  </label>
  <textarea {...register("description")} type="text" placeholder="Type here description" className="textarea textarea-bordered" ></textarea>
     
      <button className='btn btn-primary text-success text-xl  mb-7 mt-3' type="submit">Add Domain</button>
    </form>
    </div>
  );
};

export default AddDomain;