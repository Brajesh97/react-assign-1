import React from 'react'





 const fun={
     color:'blue'
 }
const Function = () => {
  return (
    <div>
        <div className='function'>
        <h2>This is created using functional Component</h2>
        <p>This is done using external CSS</p>
        <p style={fun}>This is done using internal CSS</p>
        </div>
         </div>
  )
}

export default Function