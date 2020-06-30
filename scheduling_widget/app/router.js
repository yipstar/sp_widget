import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("widget", function () {
    this.route("clinician", { path: "clinician/:clinician_id" });
    this.route("service");
    // this.route("location", { path: "location/:cpt_code_id" });
    this.route("location");
    this.route("information");
  });
});
