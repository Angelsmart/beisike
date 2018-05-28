import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../style/nav.scss';
import A41 from '../../img/search.png';
import A42 from '../../img/search_green.png';

class Nav extends Component{
	constructor(props){
        super(props);
        this.state={
        	city:['北京'],
        	citys:['上海','北京','天津','重庆','苏州','无锡','南京','杭州','宁波','绍兴','成都']
        } 
   	};
	render(){
		let left=[{'text1':'首页','text2':'HOME'},{'text1':'经典系列','text2':'CLASSIC'},{'text1':'女神系列','text2':'COODESS'},{'text1':'糖蜜系列','text2':'MOLASSES'}]
		
		return (
			<div className="nav_big">
	            <div className="nav">
		            <div className="topnavo">
		            	<a className="top_index"></a>
		            </div>
		            <div className="topnavt">
			            <div className="navt_box1">
			            	<marquee>贝思客官方申明：我司近期发现有客户通过非正常渠道售卖的代金卡无法正常使用，目前我司正通过法律途径解决此问题。我司在此郑重申明，从未授权过任何渠道售卖我司代金卡，请客户通过正常渠道（如：官网、公司销售）进行购买消费。   公告日期：2017年10月09日</marquee>
			            </div>
			            <div className='sale'>
			            	<div className='left'>
			            		<div className='lefto'><ul></ul></div>
			            		<div className='leftt'>
			            			<div className='city'>配送至: {this.state.city}</div>
			            			<div className='citys'>
				            			<ul>
				            				<li></li>
				            			</ul>
			            			</div>
			            		</div>
			            	</div>
			            	<div className='right'>
			            		<div className='right_user'></div>
			            		<div className='right_xin'></div>
			            		<div className='stock'>股票代码: 835491</div>
			            	</div>
			            </div>
			            <div className='z_nav'>
			               <div className='z_nav_left'>
			                 {
			                 	left.map((item,index)=>{
			                 		return(
			                 			<a herf=""  key={index}>
			                 			   <span>{item.text1}</span>
			                 			   <span>{item.text2}</span>
			                 			</a>
			                 		)
			                 	})
			                 }
			               </div>
			               <div className='z_nav_right'>
			                 	<Link to="/ming1" className="right_a">
			                 		<span>伴手礼系列</span>
			                 		<span>SOUVENIR</span>
			                 	</Link>
			                 	<Link to="/ming2" className="right_a2 right_a">
			                 		<span>会员专享</span>
			                 		<span>VIP Exclusive</span>
			                 	</Link>
			                 	<Link to="/ming3" className="right_a">
			                 		<span>企业福利商城</span>
			                 		<span>WELFARE</span>
			                 	</Link>
			                 	<Link to="/ming4" className="right_a4">
			                 	  <span><img src={A41} /></span>
			                 	  <span><img src={A42} /></span>
			                 	</Link>
			               </div>
			            </div>
		            </div>
	            </div>
            </div>
		)
	}
}

export default Nav;
 