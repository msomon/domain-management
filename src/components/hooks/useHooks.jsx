
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



 const useHooks = ()=>{ 



    const { refetch, data } = useQuery({
        queryKey: ['dns'],
        queryFn: async () =>{
       const res = await axios.get("http://localhost:5000/alldomain")
       return res.data ;
    
    
    }
      })

 
    return [data ,refetch]
}


export default useHooks