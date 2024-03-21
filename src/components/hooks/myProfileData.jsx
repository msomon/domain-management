
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { useEffect, useState } from "react";



 const MyprofileData = ()=>{ 
    const [user] = useAuthState(auth)
    const [data,setData] = useState([])

  



useEffect( ()=>{

    const res = axios.get(`http://localhost:5000/user/myprofile/${user?.email}`)
       .then( res =>setData(res.data) )
  
},[])


return [data]


}


export default MyprofileData