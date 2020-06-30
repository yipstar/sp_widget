import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class WidgetServiceRoute extends Route {
  @service appointmentRequest;

  async model() {
    this.appointmentRequest.cptCode = null;
    this.appointmentRequest.currentStep = this.appointmentRequest.steps.choose_service;

    let clinician = this.modelFor("widget");
    return this.store.query("cpt-code", {
      filter: { clinicianId: clinician.id },
    });
  }
}
