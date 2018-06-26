import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} 
import React, { Component } from 'react';
import { AuctionIndexPage } from './AuctionIndexPage';
import { AuctionShowPage } from './AuctionShowPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import NavBar from './NavBar';
import { NewProductPage } from './NewProductPage';
import { SignInPage } from './SignInPage';
import {Authenticator, Authenticate} from './Authenticator';
class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">	
					<NavBar/>		
						<Switch>
							<Route exact path="/" component={Home} />		
							<Route path="/products/:id" component={AuctionShowPage} />
							<Route exact path="/products" component={AuctionIndexPage} />
						</Switch>
					</div>
				</Router>	
		);
	}
}
export default App;