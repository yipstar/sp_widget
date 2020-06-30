class ClientPortalApi::BaseController < ApplicationController

  def api_headers
    {
      "Api-Version": "2020-01-01",
      "Application-Build-Version": "0.0.1",
      "Application-Platform": "web",
      "Accept": "application/vnd.api+json"
    }
  end

  def api_url
    "https://johnny-appleseed.clientsecure.me/client-portal-api"
  end
end
