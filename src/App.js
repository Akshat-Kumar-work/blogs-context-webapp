import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pageination from "./components/Pageination"
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";

export default function App() {
  
  const  {fetchBlogPosts} = useContext(Appcontext);

  useEffect( ()=>{
    fetchBlogPosts()
  },[])
  
  return (<div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <Blogs/>
    <Pageination/>
  </div>);
}
