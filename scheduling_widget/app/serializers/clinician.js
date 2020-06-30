import ApplicationSerializer from "./application";

export default class ClinicianSerializer extends ApplicationSerializer {
  keyForAttribute(key) {
    return key;
  }
}
