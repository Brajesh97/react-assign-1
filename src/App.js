import React,{Component} from "react";
import './component/Style.css';
import Function from './component/Function.js'
import Class from './component/Class.js'

const h1={

    textShadow:'5px 5px 5px pink',
    left:'20%',
    position:'absolute'

}
class App extends Component  { 
  constructor(){
    super();
    this.state={
      classClick:false,
      funcClick:false
    }
  }
  render(){
    return (
      <div className='main-container'>
      <h1 style={h1}><b>Styling using Functional and Class Component</b></h1>
      <button id='btn1' onClick={()=>this.setState({funcClick:!this.state.funcClick })}>To see styling in function compnonent</button>
        <button id='btn2' onClick={()=>this.setState({classClick:!this.state.classClick })}>To see styling in class compnonent</button>
       {this.state.funcClick ? <Function /> :null}
       {this.state.classClick ?  <Class />:null}
      
    </div>
    )
  }
    
    
  }

export default App;
