import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {useQuery} from '@tanstack/react-query'




 const CartItem = ()=>{

    const [user] = useAuthState(auth)
   

        const { refetch, data:cart } = useQuery({
            queryKey: ['cart'],
            queryFn: async () =>{
           const res = await axios.get(`http://localhost:5000/carts?email=${user?.email}`,{
            headers: {
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
           });

          return res.data ;
        
        
        }
          })
        
       
       
    
  return [cart,refetch]
}


export default CartItem
