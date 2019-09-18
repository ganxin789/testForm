import React, { Component } from 'react'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lasttiem:new Date().getTime(),
            now:0,
         }
    }
    now=()=>{   
        let {lasttiem}=this.state     
        let nowTime=new Date().getTime()
        lasttiem=nowTime
        this.setState({
            lasttiem
        })
        
    }
    click=()=>{
        let {lasttiem}=this.state 
        let nowTime=new Date().getTime()
        if (nowTime-lasttiem>10*1000) {
            console.log('hhhh:outtime')
        }
        
    }
    componentDidMount(){
     setInterval(this.click,1000)        
    }
    render() { 
        
        return (
            <div onMouseMove={this.now}>
                123
            </div>
          );
    }
}
 
export default App;