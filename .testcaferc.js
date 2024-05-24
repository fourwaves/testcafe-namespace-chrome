module.exports = {
  quarantineMode: {
    successThreshold: 1,
    attemptLimit: 3,
  },
  skipJsErrors: true,
  selectorTimeout: 15000,
  assertionTimeout: 10000,
  concurrency: 1,
  screenshots: {
    path: "!results",
    takeOnFails: true,
    fullPage: true,
    thumbnails: false,
  },
  videoPath: "!results",
  videoOptions: {
    singleFile: false,
    failedOnly: true,
  },
  videoEncodingOptions: {
    r: 5,
    aspect: "4:3",
    preset: "ultrafast",
  },
  runExecutionTimeout: 600000,
  testExecutionTimeout: 600000,
  pageRequestTimeout: 600000,
  disableNativeAutomation: false,
};
