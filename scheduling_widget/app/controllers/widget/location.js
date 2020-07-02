import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class WidgetLocationController extends Controller {
  @service appointmentRequest;

  @action
  selectLocation(office) {
    console.log("selectLocation: ", office);

    this.appointmentRequest.office = office;
    this.transitionToRoute("widget.information");
  }
}
