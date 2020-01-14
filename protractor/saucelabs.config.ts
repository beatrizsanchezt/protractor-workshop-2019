import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';
import { FileService } from '../src/service';

require('dotenv').config();

const path = require('path');
const downloadsPath = path.resolve(__dirname, '../../temp');
const fileService: FileService = new FileService();
const configVar = require('config');

export const config: Config = {
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
    fileService.cleanFolder('/temp');
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    name: 'UI Workshop',
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-popup-blocking',
        '--no-default-browser-check',
        '--window-size=800,600'
      ],
      prefs: { credentials_enable_service: false,
        'plugins.always_open_pdf_externally': true,
        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: downloadsPath,
        }
      }
    },
  },
  sauceUser: configVar.sauceUser,
  sauceKey: configVar.sauceKey,
  sauceRegion: configVar.sauceRegion
};
