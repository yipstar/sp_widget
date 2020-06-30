Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace "client_portal_api" do
    get 'clinicians/:id' => "clinicians#index"
    get 'cpt_codes' => "cpt_codes#index"
    get 'offices' => "offices#index"
  end

  get "client-portal-api/cpt-codes", to: "client_portal_api/cpt_codes#index"
  get "client-portal-api/clinicians/:id", to: "client_portal_api/clinicians#index"
  get "client-portal-api/offices", to: "client_portal_api/offices#index"
end
