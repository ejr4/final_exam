import React, { Component } from 'react';
import './App.css';

import { AuctionIndexPage } from './AuctionIndexPage';
import { AuctionShowPage } from './AuctionShowPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
// import { NewAuctionPage } from './NewAuctionPage';

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">	
					<NavBar/>		
						<Switch>
							
							<Route path="/auctions/:id" component={AuctionShowPage} />
							<Route exact path="/auctions" component={AuctionIndexPage} />
						</Switch>
					</div>
				</Router>	
		);
	}
}
export default App;