import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: [ '../test/google.spec.js' ],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
