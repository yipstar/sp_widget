import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class WidgetServiceController extends Controller {
  @service appointmentRequest;

  @action
  selectService(cptCode) {
    console.log("ServiceController selectService: ", cptCode);

    this.appointmentRequest.cptCode = cptCode;
    this.transitionToRoute("widget.location");
  }
}
