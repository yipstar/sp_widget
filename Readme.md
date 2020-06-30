# SimplePractice Scheduling Widget

## Setup
From the repo root

### rails api proxy
- cd api_proxy
- bundle install
- rails s

## ember app
- cd scheduling_widget
- yarn install
- ember s --proxy http://localhost:3000

Ember config vars:

The project instructions called for passing 2 config variables into the Ember app, I used meta tags in app/index.html for simplicity.

In app/index.html:

For the dev app to work use these tags (default).
    
    <meta name="widgetClinicianId" value="2" />
    <meta name="widgetApiHost" value="" />

Use this tag to set the live api host:

    <meta name="widgetApiHost" value="https://johnny-appleseed.clientsecure.me" />

Note setting widgetApiHost to https://johnny-appleseed.clientsecure.me results in CORS errors.
See app/adapters/application.js for comments describing the missing Access-Control-Allow-Origin header on the api server.

The CORS error issue was the reason for the simple rails proxy as a workaround.

