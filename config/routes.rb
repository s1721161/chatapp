Rails.application.routes.draw do

  devise_for :users, controllers: {
  sessions: 'users/sessions'
}

  resources :users
  resources :messages
  resources :rooms

  root 'users#index'
  get 'messages/create'
  get 'users/show'
  get 'rooms/create'
  get 'rooms/index'
  get 'rooms/show'
  post 'allchats' => 'users#create'
  get 'users/create'

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
