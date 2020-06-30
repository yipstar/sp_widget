import Route from "@ember/routing/route";

export default class WidgetClinicianRoute extends Route {
  async model(params) {
    return this.store.findRecord("clinician", params.clinician_id);
  }
}
