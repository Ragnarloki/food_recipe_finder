import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './GlobalContext';

function Recipe() {
  
  const {id} =useParams();
  const {recipeDetail,setRecipeDetail} =useContext(GlobalContext)
  console.log(id)
  useEffect(()=>{
    async function getDetails(){
      const response =await fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,{
        method: await 'GET',
        headers: {
        'X-RapidAPI-Key': '50810e21damshe5cdbabe09cb515p11a138jsnfec4fc23f06b',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    })
      const data =await response.json();
      setRecipeDetail(data)
      console.log(data.country);
    }getDetails()
  },[])
  
  return (
    <div>
      <h1>name:</h1>
        {/* <img className='DetailImg' src={recipeDetail.thumbnail_url} height={350} width={350} alt="" />
        <div>
        <div>
          {recipeDetail?.recipe?.ingredients.map((ingredients,index)=>(
            <ul key={index}>

              <li>{ingredients.description}, quantity:{ingredients.quantity}{ingredients.unit}</li>
            </ul>
          ))}
          </div>
        </div> */}
    </div>
  )
}

export default Recipe