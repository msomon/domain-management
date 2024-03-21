

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BsLockFill } from 'react-icons/bs';


const  AllDomain= ({domain,refetch }) => {

  const {_id,domainName,price,expiryDate} = domain ;
  
   

    const DeleteFromItems =(item)=>{


      if (window.confirm("Do you really want to delete?")) {
        
    
    
      axios.delete(`http://localhost:5000/deletedomain/${item._id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
       })
      .then( res =>{
                      
        if(res.data){
           toast.success(`${item.domainName} Delete successfully`)
            refetch()
                      } }   )


                    }

          }

    


    return (

    <div className="foodCart card card-compact w-[320px] lg:w-[350px] bg-white shadow-xl justify-center items-center mx-auto">
      
  <div className="card-body justify-center text-center">
    <h2 className="text-2xl">{domainName}</h2>
    <h1 className="text-xl">${price}</h1>
    <h1 className="text-xl">{expiryDate}</h1>
    <div className="card-actions justify-center ">
      <button onClick={()=> DeleteFromItems(domain)}   className="btn cartBtn btn-info mr-4">Delete</button>
      <Link to={`/dashboard/editDomain/${_id}`} ><button   className="btn cartBtn btn-info">Edit</button></Link>
    </div>
  </div>
</div>
    );
};

export default AllDomain;