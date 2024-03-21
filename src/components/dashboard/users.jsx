import axios from 'axios';
import User from './user';
import { useQuery } from '@tanstack/react-query';


const Users = () => {


    const { refetch, data:users } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{

        const res = await axios.get("http://localhost:5000/users",{
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
           })
            
          return res.data
        

    }
    
})




    return (
        <div>




<div className='lg:w-[600px] md:w-[600px] w-[300px] mx-auto rounded-lg bg-white mt-14 '>
          <div className="mb-4 mx-auto justify-center items-center sm:mt-20  ">

    
   
          {
                users?.map( user=><User key={user._id} user={user} refetch={refetch} ></User>)
            }
   
</div>  
        </div>
           
        </div>
    );
};

export default Users;