import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class WidgetLocationRoute extends Route {
  @service appointmentRequest;

  beforeModel() {
    if (!this.appointmentRequest.cptCode) {
      this.transitionTo("widget.service");
    }
  }

  async model(params) {
    console.log("location route: params: ", params);

    this.appointmentRequest.office = null;
    this.appointmentRequest.currentStep = this.appointmentRequest.steps.choose_location;

    let clinicianId = this.appointmentRequest.clinician.id;
    let cptCodeId = this.appointmentRequest.cptCode.id;

    return this.store.query("office", {
      filter: { clinicianId: clinicianId, cptCodeId: cptCodeId },
    });
  }
}
