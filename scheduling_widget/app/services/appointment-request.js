import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class AppointmentRequestService extends Service {
  get steps() {
    return {
      choose_service: 1,
      choose_location: 2,
    };
  }

  @tracked currentStep = this.steps.choose_service;
  @tracked clinician;
  @tracked cptCode;
  @tracked office;
}
