import axios from 'axios';
import { toast } from 'react-toastify';


const User = ({user,refetch}) => {


    const {name,email,role} = user ;



    const makeAdmin =(email)=>{

    axios.put(`http://localhost:5000/users/admin/${email}`)
    .then(res=>{

       if(res.status == "404"){
        toast.error("Somthing Error")
       }

        if(res.data.modifiedCount > 0 ){
         toast(`${email} Admin Added`)
         refetch()
        }
    })


    }


    return (
       
       
        <div className=' md:flex  md:[400px] lg:[500px] lg:flex md:gap-20 lg:gap-20 mt-2 justify-center items-center mx-auto lg:p-4 md:p-2'>

        <div className='flex md:w-[200px] lg:w-[200px] w-[150px] mx-auto justify-center my-4 '><p className='lg:ms-4 '>{email}  </p> </div>
        
       <div className='sm:flex justify-center items-center gap-5  mx-auto' >

       <div>{role != "admin" ?  <button onClick={() => makeAdmin(email)} className='btn btn-secondary'>Add Admin</button> : <button className='btn btn-success '  disabled >Already Admin</button> }</div>
        <div><button className='btn btn-warning'>Remove</button></div>
       </div>

       <div className="divider"></div>
       </div>
       
      
    );
};

export default User;