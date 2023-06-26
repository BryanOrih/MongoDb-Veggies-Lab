import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
const Display = ({submitted}) => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
      const getVeggie = async()=>{
        let {data} = await axios('/veggie')
        console.log(data)
        setFoods(data)
      }
      getVeggie()
    }, [submitted])
    //NOTE - show single veggie functions
    const moreInfo = (e) =>{
      e.target.previousSibling.lastChild.style.display = "block"
      e.target.nextSibling.style.display = "block"
      e.target.style.display="none"
    }
    const lessInfo = (e) =>{
      e.target.previousSibling.previousSibling.lastChild.style.display = "none"
      e.target.previousSibling.style.display = "block"
      e.target.style.display = "none"
    }
    let display = foods.map((food, index)=>{

      return(
        <div key={food._id}>
          <li>
            {food.name}
            <ul className={`food${index}`} style={{display:"none"}}>
              <li>description: {food.description}</li>
              <li>eatable: {food.eatable? "yes": "No"}</li>
              <li>updatedAt: {food.updatedAt}</li>
            </ul>
          </li>
          <button onClick={moreInfo}>More Info</button>
          <button onClick={lessInfo} style={{display: "none"}}>Close</button>
        </div>
      )
    })
  return (
    <ul className='display-list'>
      {display}
    </ul>
  )
}

export default Display