var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var CountDown = require('CountDown');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App CSS 
require('style!css!sass!applicationStyles')

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path='/' component={Main}>
				<Route path='/countdown' component={CountDown}/>
			</Route>			
		</Router>,
		document.getElementById('app')
);