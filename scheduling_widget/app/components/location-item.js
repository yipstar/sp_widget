import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class LocationItemComponent extends Component {
  @service router;
  @service appointmentRequest;

  @action
  selectLocation() {
    console.log("selectLocation");
    this.appointmentRequest.office = this.args.office;
    this.appointmentRequest.currentStep = 4;
    this.router.transitionTo("widget.information");
  }
}
