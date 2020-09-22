import React from 'react'
import Dog from './Dog';
import './DogList.css';

const DogList = ({dogs}) => {
  const dogsArray = dogs.map((dogURL,index)=>{
    return <Dog url ={dogURL} key={index}/>
  })
  return(
    <div className="container">
        {dogsArray}
    </div>
   )
 }

export default DogList;