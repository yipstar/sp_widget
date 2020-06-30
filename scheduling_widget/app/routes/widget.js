import Route from "@ember/routing/route";
import ENV from "scheduling-widget/config/environment";
import { inject as service } from "@ember/service";

export default class WidgetRoute extends Route {
  @service appointmentRequest;

  async model() {
    let clinicianId = ENV.clinicianId;

    return this.store.findRecord("clinician", clinicianId);
  }

  afterModel(model, transition) {
    // console.log("WidgetRoute afterModel: ", model, transition);
    this.appointmentRequest.clinician = model;
  }
}
