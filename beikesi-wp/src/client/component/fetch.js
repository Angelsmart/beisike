import React,{Component} from 'react'
import 'whatwg-fetch'
class Fetch extends Component{
    constructor(props){
        super(props)
        this.state={
            datas:[]
        }
        this.getData=this.getData.bind(this)
    }
     getData(){
        fetch('../json/data.json')
        .then(response=>response.json())
        .then(data=>{this.setState({datas:data.arr})})
        .catch(e=>{console.log("error")})
    }
    render(){
        const datas=this.state.datas;
        console.log(datas)
        return (
           <div>
                    <button onClick={this.getData.bind(this)}>我是</button>
                    <ul>
                  { datas.map((item,index)=>{
                      return <li key={index}>{item.names}</li>
                 })} 
              </ul>
           </div>
        )
    }
}
export default Fetch;