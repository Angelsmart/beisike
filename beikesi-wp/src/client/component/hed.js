import React,{Component} from 'react';
import Img1 from "../../img/small-banner.jpg";
import Img2 from "../../img/big-banner.jpg";
import Img3 from "../../img/small-button.png";
import Img4 from "../../img/big-button.png";



class Hed extends Component{
	constructor(props){
        super(props);
        this.state = {
			kai:true
		}
    };
    btn(){
		this.setState({
			kai:!this.state.kai
		})
	};
	render(){
		const heda = {
			position: "relative",
			width: "100%",
			height:"auto",
			fontSize:"0",
			head:{
				width: "100%",
			},
			head_b:{
				position: "absolute",
				top: "0",
				right: "20%",
			}
		}
		return (
			<div >
			    <div style={heda}>
				    <img style={heda.head} src={this.state.kai==true?Img1:Img2}/>
					<img style={heda.head_b} src={this.state.kai==true?Img3:Img4} onClick={()=>this.btn()}/>
			    </div>
				
			</div>
		)
	}
}



export default Hed;