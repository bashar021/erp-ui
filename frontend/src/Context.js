import { createContext, useEffect,useState } from "react";
import Axios from 'axios'
export const StudentContext = createContext();


export function Context({children}){
   
    const [data,setData] = useState([]);
    const [authenticatedUser,setAuthenticatedUser]  = useState("")
    const [isAuth,setIsAuth] = useState(false);

    useEffect(()=>{
        Axios.get('http://localhost:3001/getdata').then((res)=>{
            setData(res.data)
       }).catch(()=>{
           console.log("Failed")
       })
    },[])

    return (
   <StudentContext.Provider value={{data,setAuthenticatedUser,setIsAuth,authenticatedUser}}>{children}</StudentContext.Provider>
    )
}