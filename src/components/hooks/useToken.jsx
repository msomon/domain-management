
import axios from "axios";
import { useEffect, useState } from "react"


const useToken = ( user) =>{
    const [token, setToken] = useState('');



    useEffect( () =>{
        
        
        const email =user?.user?.email;
        const name = user?.user?.displayName ;

        const currentUser = {
            email: email ,
            name : name
           };

          


        if(email){

        axios.put(`http://localhost:5000/user/${email}`,currentUser)
         .then(res=>{
            if(res?.data.token){
                const accessToken = res.data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            }
            

       
})
  
        }else{



            localStorage.removeItem('accessToken');
        }

    }, [user]);
    return [token];
}

export default useToken;