import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

    
// const  fetchme = async ()=> { 


  
//   .then ( response => {
//     return response.json();
//   })	
  
//   .then(data =>{
//     setContainer(data.nameResults.results);
//     setLoading(false);
//     console.log(data)
//   })
  
//   .catch (error => {
//       console.error(error);
//   })  }


export default function Globalstate({children}){
    const [searchParam,setParam] = useState("pancake");
    const [loading,setLoading] =useState(true);
    const[recipeList,setRecipeList] =useState([]);
    const [recipeDetail,setRecipeDetail]=useState([]);
    const {incredientDetail,setincredientDetail} =useState([]);
  
    async function submitHandler(event){
        event.preventDefault()
        try{
            const res =await     fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${searchParam}`,{
                method: await 'GET',
                headers: {
                'X-RapidAPI-Key': '79b226d5c5msh58936cc3837787ap1e2f40jsn18453c50cd1b',
		        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
              }
            })
             
            const data=await res.json();
            if(data.results){
                setRecipeList(data.results)
                setLoading(false)
                setParam('')
            } 
            console.log(data.results);
        }
            
        catch(e){
            console.log(e)
            setLoading(false)
            setParam('')
        }
    }
    return <GlobalContext.Provider 
    value={{searchParam,setParam,submitHandler,incredientDetail,setincredientDetail,loading,setLoading,
        recipeList,recipeDetail,setRecipeDetail}}>
            {children}
            </GlobalContext.Provider>
} 