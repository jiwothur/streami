import React from 'react'

const Dog = ({url}) => {
  return(
    <div className="child">
        <img style ={{width: 350, height: 400}}src={url} alt="dogImage"/>
    </div>
   )
 }

export default Dog;