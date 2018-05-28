import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Switch,HashHistory,BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import Home from './client/home';
import registerServiceWorker from './registerServiceWorker';
import Ming from './client/tiao/ming'; 
import Ming1 from './client/tiao/ming1'; 
import Ming2 from './client/tiao/ming2'; 
import Ming3 from './client/tiao/ming3'; 
import Ming4 from './client/tiao/ming3'; 
ReactDOM.render(
	 <Router>
	 	<div>
	     <Route exact path="/" component={Home} />
	     <Route path="/ming" component={Ming} />
	     <Route path="/ming1" component={Ming1} />
	     <Route path="/ming2" component={Ming2} />
	     <Route path="/ming3" component={Ming3} />
	     <Route path="/ming4" component={Ming4} />
	    </div>
	 </Router>,
	document.getElementById('root'));
registerServiceWorker();
