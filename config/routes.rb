Rails.application.routes.draw do
  root to: 'visitors#new'

  resources :categories, except: [:destroy]

end
