import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = ()=>{
    const navigation = useNavigate();
    const location = useLocation();
    //current location ka jo path name hai usko splite kro / se aur last word ko daldo category k andar
    const category = location.pathname.split("/").at(-1);
   
    return(
        <div>
        <Header></Header>
        <div>
            <button onClick={()=> navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blogs></Blogs>
       <Pagination></Pagination>
        </div>
    )
}
export default CategoryPage;