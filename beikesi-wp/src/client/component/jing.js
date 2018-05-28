import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "../../style/jing.scss";
import Jing1 from "../../img/ty1.jpg";
import Jing2 from "../../img/jd.jpg";
import Jing3 from "../../img/jz.jpg";
import Jing4 from "../../img/ns.jpg";


class Jing extends Component{
	constructor(props){
        super(props);
   };
	render(){
		return (
			<div className="jing">
			    <Link to='/ming'>
                      <div className="jingleft"><img src={Jing1} /></div>
                </Link>
			   
			    <ul className="jingright">
				   <li><img src={Jing2} /></li>
				   <li><img src={Jing3} /></li>
				   <li><img src={Jing4} /></li>
				</ul>
			</div>
			
		)
	}
}



export default Jing;