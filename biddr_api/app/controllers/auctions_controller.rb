class AuctionsController < ApplicationController

    def show
        # auction = Auction.find params[:id]
        # render json: auction
        #experiment :
        auction = Auction.find params[:id]
        bids = Bid.where auction_id: auction.id
        combined = {:auction => auction, :bids => bids}
        # combined.to_json
        render json: combined

    end

    def index
        
        auctions = Auction.order(created_at: :desc)
        render json: auctions
        
    end

    def create
        auction = Auction.new auction_params
        
        auction.save!
        render json: {id: auction.id}
    end
    
    private

    def auction_params
        params.require(:auction).permit(:title, :details, :ending_date, :r_price)
    end
end
