import React, { Component } from 'react';
import Auction from './modules/auction';

class AuctionShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auctions: []
		};
		
	}

	

	componentDidMount() {
		Auction.one(this.props.match.params.id)
			.then(auction => {
				console.log(auction);
				this.setState({
					auction: auction,
					loading: false
				});
			})
    }
    render() {
		const { auction } = this.state;

	
		const { bids, ...auctionData } = this.state.auction;
		return (
			<div className="AuctionShowPage">
				<h1>Auction</h1>
                <p>Auction placeholder</p>
				<h3>Bids</h3>
				<p>bid placeholder</p>
			</div>
		);
	}
}

export { AuctionShowPage };
