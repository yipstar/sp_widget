class ClientPortalApi::CptCodesController < ClientPortalApi::BaseController
  def index
    url = "#{api_url}/cpt-codes?filter[clinicianId]=#{params[:filter][:clinicianId]}"

    render json: HTTP.headers(api_headers).get(url).to_s
  end
end
