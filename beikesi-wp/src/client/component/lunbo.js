import React,{Component} from 'react';
import '../../style/lunbo.scss';
import img1 from '../../img/pcfnjj-banner.jpg';
import img2 from '../../img/pc-mmpbanner.jpg';
import img3 from '../../img/pc-banner-bsl.jpg';
import img4 from '../../img/bslh5.jpg';
import img5 from '../../img/shuangyu.jpg';
import img6 from '../../img/pc-hjjr-banner.jpg';
import img7 from '../../img/shenming.jpg';

class Lunbo extends Component{
	constructor(props){
        super(props);
        this.state = {
        	index:0,
        	itm:setInterval(()=>{
        		this.setState({
        			
        			index:this.state.index+1
        		})
        		if(this.state.index >= 7){
        			this.setState({
        				index:0
        			})
        		}
        	},3000)
        }
   	}
	render(){
		let pics = [img1,img2,img3,img4,img5,img6,img7]
		let pic = {
			backgroundImage:'url('+ img1 +')'
		}
		return (
			<div>
	            <div className="lunbo">
					{
						pics.map((item,index)=>{
							return(
								<div className="bo" style={{backgroundImage:'url('+ item +')',opacity:this.state.index==index?1:0}} key={index}></div>
							)
						})
					}
	            </div>
            </div>
		)
	}
}

export default Lunbo;