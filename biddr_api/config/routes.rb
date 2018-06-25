Rails.application.routes.draw defaults: {format: :json} do

  #where does it go

  resources :auctions, only: [:show, :index, :create, :destroy] do
    resources :bids, only: [ :create ]
  end
  
end
