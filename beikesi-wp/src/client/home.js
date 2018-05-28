import React,{Component} from 'react';
import Hed from './component/hed';
import Nav from './component/nav';
import Jing from './component/jing';
import Details from './component/details';
import Lunbo from './component/lunbo';
import Tab from './component/tab';
import Suggest from './component/suggest';
import Foots from './component/foots';
import Fetch from './component/fetch';

import { Redirect,NavLink,Switch,HashHistory,BrowserRouter as Router,Route} from 'react-router-dom';

class Home extends Component{
	constructor(props){
        super(props);
        
    };
   
	render(){
		return (
				<div>
	               <Hed />
	               <Nav />
	               <Lunbo />
	               <Jing />
	               <Details />
	               <Tab />
	               <Suggest />
	               <Foots />
	               <Fetch />
	           </div>
			
		)
	}
}

export default Home;