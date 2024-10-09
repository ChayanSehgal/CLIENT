import { GrowthBook } from "@growthbook/growthbook-react";

const env = process.env.REACT_APP_ENV;

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-mUx1yWqSCk8hsKA",
  enableDevMode: false, //env !== "production",
  trackingCallback: (experiment, result) => {
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

growthbook.init({});

console.log(growthbook);


growthbook.setAttributes({
  id: "foo",
  url: "foo",
  path: "foo",
  host: "foo",
  query: "foo",
  deviceType: "desktop",
  browser: "chrome",
  utmSource: "foo",
  utmMedium: "foo",
  utmCampaign: "foo",
  utmTerm: "foo",
  utmContent: "foo",
});

export default growthbook;