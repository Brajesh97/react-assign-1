import React, { Component } from 'react'

const xy={
    color:'blue'
}


export class Class extends Component {
    
  render() {
    return (
      <div>
          <div className='class'>
        <h2>This is created using functional Component</h2>
        <p>This is done using external CSS</p>
        <p style={xy}>This is done using internal CSS</p>
        </div>
      </div>
    )
  }
}

export default Class