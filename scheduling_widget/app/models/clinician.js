import Model, { attr } from "@ember-data/model";

export default class ClinicianModel extends Model {
  @attr firstName;
  @attr lastName;
}
