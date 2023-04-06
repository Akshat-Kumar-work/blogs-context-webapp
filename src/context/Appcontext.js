import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"


//first step => creating context with help of createContext method
 export const Appcontext = createContext();

//here children means app.js , as it is present in index.js file 
//appcontextprovider naam ka component hai , jiske andar app.js file hai as a children in index.js file
function AppcontextProvider({children}){
     
     const [loading , setloading] = useState(false);
     const [posts,setPosts] = useState([]); //all posts is here
     const [page,setPage] = useState(1); //page no.
     const [totalPages,setTotalPages] = useState(null); //total no of pages 


     //data filling 
     async function fetchBlogPosts(page=1){
          setloading(true);
          let url = `${baseUrl}?page=${page}`;
          console.log("printing the final URL");
        console.log(url);
          try{
               const result = await fetch(url);
               const data = await result.json();
               console.log(data)
               setPage(data.page)
               setPosts(data.posts)
               setTotalPages(data.totalPages)
          }
          catch(error){
               console.log("error in fetching data")
               setPage(1)
               setPosts([])
               setTotalPages(null)
          }
          setloading(false);
     }

     function handlePageChange(page){
          setPage(page);
          fetchBlogPosts(page)
     }


     const values = {
          loading,
          setloading,
          posts,
          setPosts,
          page,
          setPage,
          totalPages,
          setTotalPages,
          fetchBlogPosts,
          handlePageChange
     }


//second step (context providing) =>  //app context k children ko value provide kar rhe hai
     return <Appcontext.Provider value={values}>
          {children}
     </Appcontext.Provider>
}



export default AppcontextProvider;