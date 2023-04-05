import { createContext, useState } from "react";

//first step => creating context
const Appcontext = createContext();
export default Appcontext;

//second step => creating component provider 
//here children means app.js , as it is present in index.js file 
function AppcontextProvider({children}){
     const [loading , setloading] = useState(false);
   
}