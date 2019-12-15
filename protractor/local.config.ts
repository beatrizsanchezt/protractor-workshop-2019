import { Config, browser } from "protractor";
import { reporter } from "./helpers/reporter";

export const config: Config = {
  framework: "jasmine",
  SELENIUM_PROMISE_MANAGER: false,
  specs: ["../test/**/*.spec.js"],
  getPageTimeout: 3000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(0);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
};
