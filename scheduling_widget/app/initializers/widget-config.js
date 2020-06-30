import ENV from "scheduling-widget/config/environment";

export function initialize(application) {
  let clinicianId = document
    .querySelector("meta[name=widgetClinicianId]")
    .getAttribute("value");

  // console.log("clinicianId: ", clinicianId);

  ENV.clinicianId = clinicianId;

  let apiHost = document
    .querySelector("meta[name=widgetApiHost]")
    .getAttribute("value");

  // console.log("apiHost: ", apiHost);

  ENV.apiHost = apiHost;
}

export default {
  initialize,
};
