"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "scheduling-widget",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // usingCors: false,
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  ENV.contentSecurityPolicy = {
    // ... other stuff here
    "connect-src": "'self' *.clientsecure.me",
  };

  ENV.GOOGLE_MAPS_API_KEY = "AIzaSyBAEf51QxAS9vSe1GxifP1FgZ7w6gSfOGY";

  // Here's our 2 variables to set outside the app
  ENV.clinicianId = 2;
  ENV.api_host = null;
  // ENV.api_host = "https://johnny-appleseed.clientsecure.me";

  return ENV;
};
