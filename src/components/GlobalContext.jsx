import { createContext, useState } from "react";

export const GlobalContext = createContext(null);



export default function Globalstate({children}){
    const [searchParam,setParam] = useState("");
    const [loading,setLoading] =useState(true);
    const[recipeList,setRecipeList] =useState([])
    const [recipeDetail,setRecipeDetail]=useState(null);
    async function submitHandler(event){
        event.preventDefault()
        try{
            const res =await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
             
            const data=await res.json();
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setParam('')
            } 
            console.log(data);
        }
            
        catch(e){
            console.log(e)
            setLoading(false)
            setParam('')
        }
    }
    return <GlobalContext.Provider value={{searchParam,setParam,submitHandler,loading,recipeList,recipeDetail,setRecipeDetail}}>{children}</GlobalContext.Provider>
} 