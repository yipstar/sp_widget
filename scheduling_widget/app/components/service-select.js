import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ServiceSelectComponent extends Component {
  @service router;
  @service appointmentRequest;

  @action
  selectService() {
    // console.log("selectService: ", this.args.cptCode.id);
    this.appointmentRequest.cptCode = this.args.cptCode;
    this.router.transitionTo("widget.location");
  }
}
