import { useContext } from "react";
import Spinner from "./Spinner";
import {Appcontext} from "../context/Appcontext"
import Card from "./Card";


function Blogs(){
    //step 3 => consuming data 
    const {posts,loading} = useContext(Appcontext);
    return(
        <div>
            {
                loading? (<Spinner/>) : (
                    posts.length === 0 ? (<div>
                        <p> No post Found</p>
                    </div>) : 
                    ( posts.map ( (post)=>{
                        return ( <Card/>)
                    }) )
                )
            }
        </div>
    )
}

export default Blogs;