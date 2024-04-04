import React, { useContext, useEffect, useState } from 'react'
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
      console.log(data);
    }getDetails()
  },[])
  
  return (
    <div>
      <div className="container"></div>
      <div className="row">
      <div className="col">
      <img className='DetailImg' src={recipeDetail.thumbnail_url} height={350} width={350} alt="" />

      </div>
      <div className='col' style={{marginTop:'100px'}}>
        {recipeDetail.sections[0].components.map((ingre,index)=>(
          <div key={index}>
            <ul>
              <li>{ingre.raw_text}</li>
            </ul>
          </div>
        ))}
        
      </div>
      </div>
      <div>
      <h4 style={{display:'flex',justifyContent:'center',margin:'30px',alignContent:'center'}}>{recipeDetail.description}</h4>
     
        <div style={{margin:'20px'}}>
          {recipeDetail.instructions.map((ingredients,index)=>(
            <ul key={index}>

              <li>{ingredients.display_text}</li>
            </ul>
          ))}
          </div>

        </div>
    </div>
  )
}

export default Recipe