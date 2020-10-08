// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiBaseUrl: "https://MyTpQBot9.azurewebsites.net/api/Request/",
    selfUrl: "https://MyTpQBot9-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
       tenantId: "25a99bf0-8e72-472a-ae50-adfbdf0df6f1",
        clientId: "1788850a-7671-4258-8f95-eae15fc2676c",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
