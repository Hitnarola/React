// to make dynamic components
// where i write this bresis {} in this whatever we write inside this which is the normal javascript 

import React from 'react'

const Hello = () => {
  let myname='hit narola';

  let fullname=()=>{
    return  'hit '
  }
  return (
    <div>
      <h3>i am your  master  { fullname()}</h3>
    </div>
  )
}

export default Hello;