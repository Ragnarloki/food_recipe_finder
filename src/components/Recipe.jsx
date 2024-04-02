import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './GlobalContext';

function Recipe() {
  
  const {id} =useParams();
  const {recipeDetail,setRecipeDetail} =useContext(GlobalContext)
  console.log(id)
  useEffect(()=>{
    async function getDetails(){
      const response =await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data =await response.json();
      setRecipeDetail(data?.data)
      console.log(data);
    }getDetails()
  },[])
  return (
    <div>
        <img className='DetailImg' src={recipeDetail?.recipe?.image_url} height={350} width={350} alt="" />
        <div>
        <div>
          {recipeDetail?.recipe?.ingredients.map((ingredients,index)=>(
            <ul>

              <li>{ingredients.description}, quantity:{ingredients.quantity}{ingredients.unit}</li>
            </ul>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Recipe