Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]
  mount ActionCable.server => '/cable'

  #What’s going on with line 6 here? 
  # Well remember that WebSockets are their own protocol, 
  # so we’re not going to be setting up any ‘GET’ or ‘POST’ routes for them. 
  # Instead, the /cable endpoint is what our client will be using to instantiate the WebSockets connection with our server. 
  # Labeling this endpoint /cable endpoint is simply convention.
end
