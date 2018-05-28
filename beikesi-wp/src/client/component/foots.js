import React,{Component} from 'react';
import "../../style/foots.scss";

class Foots extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let dai=[{"tt":"代金卡章程"},{"tt":"购物指南"},{"tt":"配送方式"},{"tt":"服务条款"},{"tt":"联系我们"}]
		return(
			<div className="foots">
			     <div>
			        <ul >
			           {
			           	 dai.map((item,index)=>{
			           	 	return(
			           	 		<li key={index}>{item.tt}</li>
			           	 	)
			           	 })
			           }
			        </ul>
			        <ul>
			            <li>品牌故事</li>
			             <li>网站地图</li>
			        </ul>
			     </div>
			</div>
		)
	}
}

export default Foots;