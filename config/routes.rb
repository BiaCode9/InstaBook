# frozen_string_literal: true

Rails.application.routes.draw do
  resources :posts do
    resources :comments
    member do
      get 'user_index'
    end
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
