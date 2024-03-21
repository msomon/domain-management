
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Share/Loading';
import { signOut } from "firebase/auth";
import auth from '../../../firebase.init';


const RequireAdmin = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    const location = useLocation();


    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(!user || !admin){
        
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if(user && !admin){
          signOut(auth);
          localStorage.removeItem('accessToken');
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;