import Model, { attr } from "@ember-data/model";

export default class CptCodeModel extends Model {
  @attr description;
  @attr duration;
}
