import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

require('dotenv').config();

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

const chromeConfig = {
  browserName: 'chrome',
  name: 'chrome-tests',
  shardTestFiles: true,
  maxInstances: 1,
};

const multiCapabilities = [chromeConfig, firefoxConfig];
const configVar = require('config');

export const config: Config = {
  multiCapabilities,
  directconnect: true,
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
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
  sauceUser: configVar.sauceUser,
  sauceKey: configVar.sauceKey,
  sauceRegion: configVar.sauceRegion
};
