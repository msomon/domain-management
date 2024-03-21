
import { useEffect, useState } from "react"
import axios from "axios";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect( () =>{
        const email = user?.email;

        if(email){

   
        axios.get(`http://localhost:5000/users/admin/${email}`)
     .then(res=>{
    
     setAdmin(res.data?.admin)
        setAdminLoading(false)
        })
            
    }     
       
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;