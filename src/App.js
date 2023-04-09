import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation;
  useEffect(() => {
    //agar page naam ki key milgyi toh uski value daldo page variable m, agar nai hai toh by default 1 daldo
    const page = searchParams.get("page") ?? 1;
    //check kro  current location k path name m tag naam ki chiz available hai
    if(location.pathname.includes("tags")){
      //agar available hai toh tag vala page show krdo , / se split kro alg alg sare words ko aur
      const tag = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page) , tag);
    }
    else if( location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", "");
      fetchBlogPosts(Number(page), null , category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
   }, [location.pathname, location.search]);

  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
    <Route path="/tags/:tag" element={<TagPage/>}></Route>
    <Route path="/categories/:category " element={<CategoryPage/>}></Route>

   </Routes>
  );
}
