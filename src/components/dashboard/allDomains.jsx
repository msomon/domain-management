
import Loading from "../Share/Loading";
import useHooks from "../hooks/useHooks"
import AllDomain from "./allDomain";


const AllDomains = () => {

 const [data,refetch] = useHooks()


 if(!data){
  return <Loading></Loading>
}


  return (

    <div className="mt-8 md:mt-20 sm:mt-20 lg:mt-20">
 
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-12 md:gap-8  justify-center items-center lg:w-4/6 md:w-full w-full mx-auto">
      {
       data?.map(domain=><AllDomain key={domain._id} refetch={refetch} domain={domain} ></AllDomain>)
      }
      </div>
    </div>
  );
};

export default AllDomains;



