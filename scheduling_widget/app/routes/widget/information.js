import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class WidgetInformationRoute extends Route {
  @service appointmentRequest;

  beforeModel() {
    this.appointmentRequest.currentStep = this.appointmentRequest.steps.review;

    if (!this.appointmentRequest.office) {
      this.transitionTo("widget.service");
    }
  }
}
