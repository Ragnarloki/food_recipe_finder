import React, { useContext, useState } from 'react'
import '.././App.css'
import { GlobalContext } from './GlobalContext'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
   
   const {searchParam,setParam,submitHandler} =useContext(GlobalContext);
      console.log(searchParam);
   const {recipeList,loading} =useContext(GlobalContext)
        
   function onchangeHandler(e){
    setParam(e.target.value)
   }

   
  return (
    <div>
        <center>
      <form onSubmit={submitHandler}>
        <input type="text" value={searchParam} 
        onChange={onchangeHandler}
        placeholder='serch the food name here' width={700} height={300} autoFocus/>
        <button type='submit' className='button'>submit</button>
      </form>  
        </center>

    <div>
      {recipeList && recipeList.length >0?
      <div className='car'>{recipeList.map((item,index)=>
        
          <>
          
           <div key={index} className='ca'  style={{width: "18rem"} }>
          
          <img src={item?.image_url} alt="" width={250} height={300} />
          
          <p className='card-title'>{item?.title}</p>
          <Link to={`/recipe/${item?.id}`}><button className='btn btn-primary'>recipeDetails</button>
          </Link>
          </div>
          
              
                   </>
         
                 )}
                 
        </div>: null}
    </div>
    </div>
  )
}

export default Home