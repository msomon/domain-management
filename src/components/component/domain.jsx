
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../../firebase.init';
// import { toast } from 'react-toastify';
import CartItem from '../hooks/CartItem';
import useAdmin from '../hooks/useAdmin';
import axios from 'axios';
import { toast } from 'react-toastify';



const Domain = ({domain}) => {


 


    const {_id,domainName,price,expiryDate} = domain ;
    const navigate = useNavigate()
    const[user] =useAuthState(auth)
    const [cart,refetch] = CartItem()
    const [admin] = useAdmin(user)
   

    const AddtoCart =(item)=>{
    
      
    
        const selected = cart?.find(data=> data?.name == item?.name );

            if(user && user.email){
      
              const cartItem ={
                domainName:item.domainName,
                price:item.price ,
                quantity:selected?.quantity ? selected?.quantity + 1 : 1  ,
                email:user?.email
              }
        
        
              axios.put(`http://localhost:5000/addToCart/${item._id}`,cartItem)
                     .then( res =>{
        
                      if(res.data){
                        toast.success(`${item.domainName} Added successfully`)
                        refetch()
                      } }   )
      
      
            } else{
      
              navigate("/login")
              toast("Please login")
            }
      
      
          }




    return (
     
    <div className="foodCart card card-compact w-[320px] lg:w-[350px] bg-white shadow-xl justify-center items-center mx-auto">
    {/* <figure><img className='h-60 w-60 rounded-lg mt-2' loading='lazy' src={image} alt="Shoes" /></figure> */}
    <div className="card-body justify-center text-center">
      <h2 className="text-2xl">{domainName}</h2>
      <h1 className="text-xl">${price}</h1>
      <h1 className="text-xl">{expiryDate}</h1>
      <div className="card-actions justify-center ">
        <button disabled={admin ? true : false} onClick={()=> AddtoCart(domain)}   className="btn btn-info ">Add to cart</button>
      </div>
    </div>
  </div>

   
    );
};

export default Domain;