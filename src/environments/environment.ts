// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyCq1t1X34DzlVKBeQKjZvKY6Uh0Le1nhi4",
    authDomain: "emulator-123.firebaseapp.com",
    projectId: "emulator-123",
    storageBucket: "emulator-123.appspot.com",
    messagingSenderId: "451254566218",
    appId: "1:451254566218:web:2eaddf355689fed92715b3",
    measurementId: "G-2JE0ZHCKY2"
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
