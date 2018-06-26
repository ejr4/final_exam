import React, { Component } from 'react';
import Auction from './modules/auction';
import { Link } from 'react-router-dom';

class AuctionIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auctions: []
		};
		this.deleteAuction = this.deleteAuction.bind(this);
	}

	deleteAuction(auctionId) {
		this.setState({
			auctions: this.state.auctions.filter(auction => auction.id !== auctionId)
		});
	}

	componentDidMount() {
		Auction.all().then(auctions => {
			this.setState({
				auctions: auctions
			});
		});
	}
	render() {
		return (
			<div className="AuctionIndexPage">
				
				<h2>Auctions</h2>
				{this.state.auctions.map(auction => (
					<div key={auction.id}>
						<Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
						<span> - {auction.r_price}</span>
						<span> - {auction.ending_date}</span>
						<p> - {auction.details}</p>
						<input
							onClick={() => this.deleteAuction(auction.id)}
							type="submit"
							value="Delete"
						/>
					</div>
				))}
			</div>
		);
	}
}

export { AuctionIndexPage };