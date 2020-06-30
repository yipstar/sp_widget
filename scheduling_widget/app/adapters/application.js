import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default class ApplicationAdapter extends JSONAPIAdapter {
  // host = "https://johnny-appleseed.clientsecure.me/client-portal-api";
  namespace = "client-portal-api";

  headers = {
    "Api-Version": "2020-01-01",
    "Application-Build-Version": "0.0.1",
    "Application-Platform": "web",
    // "Referrer-Policy": "strict-origin-when-cross-origin",
    // "X-Permitted-Cross-Domain-Policies": "none",
    // "Access-Control-Allow-Origin": "http://localhost:4200",
  };
}
