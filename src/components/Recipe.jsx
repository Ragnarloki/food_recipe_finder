import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './GlobalContext';
import ReactPlayer from 'react-player';
function Recipe() {
  
  const {id} =useParams();
  const {recipeDetail,setRecipeDetail} =useContext(GlobalContext)
  const {loading,setLoading}=useContext(GlobalContext)
  console.log(id)
  useEffect(()=>{
    async function getDetails(){
      const response =await fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,{
        method: await 'GET',
        headers: {
        'X-RapidAPI-Key': '79b226d5c5msh58936cc3837787ap1e2f40jsn18453c50cd1b',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    })
      const data =await response.json();
      setRecipeDetail(data)
      console.log(data);
      setLoading(false)
      console.log(data);
    }getDetails()
  },[])
  const section = recipeDetail;
  return (
    <div>
      <div className=""></div>
      <div className="row">
      <div className="col">
      <img className='DetailImg' src={recipeDetail.thumbnail_url} height={350} width={350} alt="" />

      </div>
      <div className='col' style={{marginTop:'30px'}}>
          {loading?<h1>loading...</h1>:
          <div>
             
          <div >
          <ReactPlayer
            url={section.renditions[0].url}// Replace with your video URL
            controls={true}
            width={350} height={350}
            
          />
        </div>
            
          </div>}
        </div>
        <div>
        <div className='col'>
            {section.length==0?<div>
            {section.sections[0].components.map((incre,index)=>(
          
              <ul key={index} title='INCREDIENTS'>
                
                       <li>{incre.raw_text}</li>
              
              
            </ul>
           
            )) }</div>:null}</div>
        </div>
      </div>
      <div>
      <h4 style={{display:'flex',justifyContent:'center',margin:'30px',alignContent:'center'}}>{recipeDetail.description}</h4>
     
        <div style={{margin:'20px'}}>
          {loading?<h1>loading...</h1>:
          recipeDetail.instructions.map((ingredients,index)=>(
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