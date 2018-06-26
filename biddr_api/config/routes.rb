Rails.application.routes.draw do

  resources :auctions, defaults: {format: :json}, only: [:show, :index, :create, :destroy] do
    resources :bids, only: [ :create ]
  end
  
end
