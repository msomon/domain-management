import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Share/Loading';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';




const Myorders = () => {

    const [user] = useAuthState(auth)

    const { refetch, data } = useQuery({
        queryKey: ['Myorder'],
        queryFn: async () =>{
       const res = await axios.get(`http://localhost:5000/myorders/${user?.email}`,{
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
       });
      return res.data ;
    
    }
      })


  

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3 lg:gap-5 sm:mt-20'>
    
            {
                data?.map(order => (

 <div  key={order._id} className="foodCart card card-compact h-fit w-[320px] lg:w-[350px] bg-base-100 shadow-xl justify-center items-center mx-auto gap-3">
    
  <div className="card-body justify-center text-center">
   
    
        <div className=''>  
        {
        order.item.map(i =>
            <div key={i._id} className=' mt-2 gap-3 flex justify-between items-center ' > 
            <h1 className='text-2xl font-bold text-success mx-auto' >{i.domainName}</h1>
           
        </div>
        )
        }
        </div>
        <h2 className="text-xl font-bold text-success ">{order.email}</h2>
    <h1 className="text-xl"><span className='font-bold text-success'>Total:</span>$ {order.total}</h1>
    <h1 className="text-xl"><span className='font-bold text-success'>Time:</span> {order.date.slice(0,10)}</h1>
    <h1 className="text-xl"><span className='font-bold text-success'>Address:</span> {order?.address}</h1>
    <h1 className="text-xl"><span className='font-bold text-success'>Mobile:</span> {order?.number}</h1>
    <h1 className="text-xl"><span className='font-bold text-success'>TransId:</span> {order.transactionId.slice(1,15)}</h1>
    <h1 className=" btn btn-disabled">Paid</h1>
    
  </div>
   </div>
                ))
            }
        </div>
    );
};

export default Myorders;