import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	
	return (
		<nav className="NavBar">

			<NavLink exact to="/">
                Home
            </NavLink>
			<NavLink exact to="/auctions">
				Auctions
			</NavLink>
			<NavLink exact to="/auctions/new">
				New Auction
			</NavLink>

		</nav>
	);
}
export default NavBar;