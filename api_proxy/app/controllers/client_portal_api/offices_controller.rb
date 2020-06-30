class ClientPortalApi::OfficesController < ClientPortalApi::BaseController
  def index
    url = "#{api_url}/offices?filter[clinicianId]=#{params[:filter][:clinicianId]}&filter[cptCodeId]=#{params[:filter][:cptCodeId]}"

    # binding.pry

    render json: HTTP.headers(api_headers).get(url).to_s
  end
end
