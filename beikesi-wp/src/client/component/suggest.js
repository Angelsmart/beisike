import React, {Component} from 'react';
import '../../style/suggest.scss';
import jzb from '../../img/jzb.jpg';
import hbp from '../../img/黑白配.jpg';
import nqhy from '../../img/浓情花意.jpg';
import blnjl from '../../img/布朗尼精灵.jpg';
import jsll from '../../img/金色榴莲.jpg';
import xdg from '../../img/papi.jpg';
import xxx from '../../img/3x.png';
import xxxx from '../../img/4x.png';
import xx from '../../img/2x.png';
// import mov from '../../static/唐嫣发布会剪辑成品new.mov';

class Suggest extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className='section_3'>
               <div className='s_3_l'>
                  <ul className='s_3_l_ul'>
                  	<li>
                       <div className='s_3_li_div1'>
                           <img src={hbp} alt='' />
                       </div>
                       <div className='s_3_li_div2'>
                         <div className='s_div_1'>黑白配</div>
                         <div className='s_div_2'>Black and white</div>
                         <div className='s_div_3'>
                            甜度：
                            <img src={xxx} alt='' />
                         </div>
                         <div className='s_div_4'>
                           <span>￥</span>
                           <span>198</span>
                         </div>
                       </div>
                  	</li>
                  	<li className='s_3_l_1'>
                       <div className='s_3_li_div1'>
                           <img src={blnjl} alt='' />
                       </div>
                       <div className='s_3_li_div2'>
                         <div className='s_div_1'>布朗尼精灵</div>
                         <div className='s_div_2'>Brownie Elf</div>
                         <div className='s_div_3'>
                            甜度：
                            <img src={xx} alt='' />
                         </div>
                         <div className='s_div_4'>
                           <span>￥</span>
                           <span>198</span>
                         </div>
                       </div>
                  	</li>
                  	<li className='s_3_l_1'>
                       <div className='s_3_li_div1'>
                           <img src={xdg} alt='' />
                       </div>
                       <div className='s_3_li_div2'>
                         <div className='s_div_1'>PAPI熊蛋糕</div>
                         <div className='s_div_2'>PAPI</div>
                         <div className='s_div_3'>
                            甜度：
                            <img src={xxx} alt='' />
                         </div>
                         <div className='s_div_4'>
                           <span>￥</span>
                           <span>198</span>
                         </div>
                      </div>
                  	</li>
                  </ul>
                  <ul className='ul_2'>
                  	<li>
                       <div className='s_3_li_div1'>
                           <img src={nqhy} alt='' />
                       </div>
                       <div className='s_3_li_div2'>
                         <div className='s_div_1'>浓情花意</div>
                         <div className='s_div_2'>Love of Flower</div>
                         <div className='s_div_3'>
                            甜度：
                            <img src={xxxx} alt='' />
                         </div>
                         <div className='s_div_4'>
                           <span>￥</span>
                           <span>198</span>
                         </div>
                       </div>
                  	</li>
                  	<li className='s_3_l_1'>
                       <div className='s_3_li_div1'>
                           <img src={jsll} alt='' />
                       </div>
                       <div className='s_3_li_div2'>
                         <div className='s_div_1'>金色榴莲</div>
                         <div className='s_div_2'>Durian Cake</div>
                         <div className='s_div_3'>
                            甜度：
                            <img src={xxx} alt='' />
                         </div>
                         <div className='s_div_4'>
                           <span>￥</span>
                           <span>198</span>
                         </div>
                      </div>
                  	</li>
                  	<li className='s_3_l_1 img'>
                      <img src={ jzb } alt='' />
                  	</li>
                  </ul>
               </div>
               <div className='s_3_r'>
                 <div className='s_3_r_v'>
                 </div>
                 <div className='s_3_r_l'></div>
                 <div className='s_3_r_r'></div>
               </div>
			</div>
		)
	}
}
export default Suggest;