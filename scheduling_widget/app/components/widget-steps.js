import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class WidgetStepsComponent extends Component {
  @service appointmentRequest;
}
