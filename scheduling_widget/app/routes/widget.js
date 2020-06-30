import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";

export default class WidgetRoute extends Route {
  @service appointmentRequest;

  async model() {
    let clinicianId = 2;
    return this.store.findRecord("clinician", clinicianId);
  }

  afterModel(model, transition) {
    // console.log("WidgetRoute afterModel: ", model, transition);
    this.appointmentRequest.clinician = model;
  }
}
