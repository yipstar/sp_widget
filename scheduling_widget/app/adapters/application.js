import JSONAPIAdapter from "@ember-data/adapter/json-api";
import ENV from "scheduling-widget/config/environment";

export default class ApplicationAdapter extends JSONAPIAdapter {
  // TODO: CORS issues with api host
  // Setting host breaks the app with browser CORS errors
  // Access to XMLHttpRequest at 'https://johnny-appleseed.clientsecure.me/client-portal-api/clinicians/2' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // for dev leave host null and use the rails app proxy in the api_proxy folder of the repo root.

  // used for testing cors issues
  // host = "https://johnny-appleseed.clientsecure.me";

  // host is set from meta tag name=widgetApiHost in index.html
  host = ENV.apiHost;

  namespace = "client-portal-api";

  headers = {
    "Api-Version": "2020-01-01",
    "Application-Build-Version": "0.0.1",
    "Application-Platform": "web",
  };
}
