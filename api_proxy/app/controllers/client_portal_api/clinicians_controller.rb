class ClientPortalApi::CliniciansController < ClientPortalApi::BaseController
  def index
    url = "#{api_url}/clinicians/#{params[:id]}"

    render json: HTTP.headers(api_headers).get(url).to_s
  end
end
