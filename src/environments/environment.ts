// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA3x_tdkyCJLZZxxWiOuW6qg0aOw1vuXj4",
    authDomain: "goby-a1996.firebaseapp.com",
    databaseURL: "https://goby-a1996.firebaseio.com",
    projectId: "goby-a1996",
    storageBucket: "goby-a1996.appspot.com",
    messagingSenderId: "540145033481",
    appId: "1:540145033481:web:fd88d091f2e0850b8cb3d8",
    measurementId: "G-TZXF4YDY04"
  },
  onesignal: {
    appId: "473af2db-5227-471e-9f6d-cf4583f798e4",
    googleProjectNumber: "540145033481",
    restKey: "NzZkMGQ0MmUtNmE0Ny00YzBmLTliMjgtNTFmZWQzMWYzNzMw"
  },
  stripe: {
    sk: ""
  },
  paypal: {
    sandbox: "",
    production:
      "AUQL8ZowKIFJ0F1BpAqgNR5vh3HUW3YYwnMMUXH3C8LLXpx4tZ9j6tyItEcbGpThF6lnMbPOzAf4WDWp"
  },
  general: {
    symbol: "$",
    code: "MXN"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
