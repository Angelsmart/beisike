import React,{Component} from 'react';
import "../../style/details.scss";
import Details1 from "../../img/极地牛乳.jpg"
import Details2 from "../../img/马卡龙.jpg"
import Details3 from "../../img/红丝绒.jpg"
import Details4 from "../../img/小确幸.jpg"
import Details1a from "../../img/3x.png"
import Details1b from "../../img/4x.png"
import Details1c from "../../img/2x.png"
 

class Details extends Component{
	constructor(props){
        super(props);
   };
	render(){
		const date=[
				{ 
					imm:Details1,
					name:"极地牛乳",
					id:"id_1",
					ename:"Rolar Leche",
					kg:"1.2",
					swt:"3",
					xilie:"经典口味",
					kouwei:"浓情芝士",
					ycl:"进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁",
					price:"198",
					news:"0",
					image:Details1a
				},
				{
					imm:Details2,
					name:"马卡龙の吻",
					id:"id_2",
					ename:"Macaron	Kiss",
					kg:"1.2",
					swt:"4",
					xilie:"女神系列",
					kouwei:"醇香奶油",
					ycl:"手工马卡龙、安佳淡奶油、戚风蛋糕胚",
					price:"218",
					news:"0",
					image:Details1b
				},
				{
					imm:Details3,
					name:"白色红丝绒",
					id:"id_3",
					ename:"White Red Velvet",
					kg:"1.2",
					swt:"2",
					xilie:"经典口味",
					kouwei:"醇香奶油",
					ycl:"进口安佳淡奶油、红丝绒预拌粉、甜菜根粉",
					price:"198",
					news:"0",
					image:Details1c
				},
				{
					imm:Details4,
					name:"双果小确幸",
					id:"id_4",
					ename:"Avocado & Pitaya fruit Cake",
					kg:"1.2",
					swt:"2",
					xilie:"女神系列",
					kouwei:"缤纷果味",
					ycl:"进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁",
					price:"288",
					news:"0",
					image:Details1c
				}
		    ]

		return (
			<div className="details">
			   {
				   	date.map((item,index)=>{
				   		return(
				   			<div className="details_one" key={index}>
						        <div className="details_one_left">
						            <div >
						               <img src={item.imm} />
						            </div>
						            <div>
						                新
						            </div>
						        </div>
						        <div className="details_one_right">
						            <div className="details_one_right_one">
						                <span>{item.name}</span>
						                <span>{item.kg}榜</span>
						            </div>
						            <div className="details_one_right_two">
						                {item.ename}
						            </div>
						             <div className="details_one_right_three">
						                甜度:<img src={item.image} />
						            </div>
						            <div className="details_one_right_four">
						                系列:<span> {item.xilie}  </span>
						                口味:<span> {item.kouwei} </span>
						            </div>
						            <div className="details_one_right_four">
						                原材料:<span> {item.ycl}   </span>
						            </div>
						            <div className="details_one_right_five">
						                <span>￥</span>
						                <span>{item.price}</span>
						            </div>
						            <div className="details_one_right_six">
						                <div>加入购物车</div>
						                <div>立即购买</div>
						            </div>
						        </div>
				            </div>
				   		)
				   	})
			    }
		    </div>
		)
	}
}



export default Details;