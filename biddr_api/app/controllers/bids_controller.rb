class BidsController < ApplicationController
    def create
        bid = Bid.new bid_params   
        bid.save!
        render json: {id: bid.id}
    end
    private

    def bid_params
        params.require(:bid).permit(:amount)
    end
end
