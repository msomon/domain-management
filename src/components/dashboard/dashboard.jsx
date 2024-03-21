
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)
    

    return (
        <div className="drawer drawer-mobile min-h-80 ">
            
        {/* <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">Dashboard
      </label> */}
       <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle "  />

{ user &&
       <div className="drawer-content dashboard ">

        <div>
        <h2 className='lg:text-2xl mt-4 mb-7 lg:mb-10 sm:text-sm ml-4 font-bold text-purple-500'>Welcome <span className='text-primary'>{user?.displayName}</span> to your Dashboard</h2>
        </div>
         
        <div className='dashboard-btn  '>

        <label tabIndex="1" htmlFor="dashboard-sidebar" className="dashboard  btn btn-ghost bg-blue-500 w-28   lg:hidden md:hidden ">Dashboard
        </label>
        </div>
           
           <Outlet ></Outlet>
       </div>}


       
       <div className="drawer-side mt-10 ">
           <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
           <ul className="menu p-4 overflow-y-auto  bg-base-100 text-base-content rounded-lg">
               {/* <!-- Sidebar content here --> */}
               
       
               {
                (user && !admin ) &&  <>
               <li><NavLink to='myorders' >My Orders</NavLink></li>
               <li><NavLink to="addreview">Add Review</NavLink></li>
               <li><NavLink className='sm:w-28 justify-center'  to="myprofile" >My Profile</NavLink></li>

               
               
                   </>
               }


               { admin && <>
               <li><Link to="users">Users</Link></li>
               <li><NavLink to="addproduct">Add Product</NavLink></li>
               <li><NavLink to="allorders">All Orders</NavLink></li>
               <li><NavLink to="allitems">All Items</NavLink></li>
              
               </>}
               
           </ul>
          
       </div>
   </div>
    );
};

export default Dashboard;