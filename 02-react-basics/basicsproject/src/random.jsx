import React from 'react'

const Random = () => {

  let number =Math.random()*10;
  return (
    <div>random number is :{number}</div>
  )
}

export default Random;