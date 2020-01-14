import { browser } from 'protractor';
import { Continents, SeleniumCommands, PersonalInformationPage } from '../src/page';

describe('Given that I´m a Protractor learner', () => {
  describe('When I navigate to the practice page', () => {
    beforeAll(async () => {
      const remote = require('selenium-webdriver/remote');
      browser.driver
      .manage()
      .window()
      .maximize();
      browser.setFileDetector(new remote.FileDetector());
      await browser.get('http://toolsqa.com/automation-practice-form/');
    });

    xit('then I should receive a confirmation', async () => {
      const personalInformationPage = new PersonalInformationPage();
      await personalInformationPage.fillForm(
        'Alejandro',
        'Perdomo',
        'Male',
        7,
        'Automation Tester',
        ['Selenium Webdriver'],
        Continents['South America'],
        [SeleniumCommands['Browser Commands'],
          SeleniumCommands['Navigation Commands'],
          SeleniumCommands['Switch Commands'],
          SeleniumCommands['Wait Commands'],
          SeleniumCommands['WebElement Commands']],
        'resources/betyIcon.jpg',
      );
      const url = await browser.getCurrentUrl();
      expect(url).toContain('firstname=Alejandro');
      expect(url).toContain('sex=Male');
      expect(url).toContain('exp=7');
      expect(url).toContain('profession=Automation+Tester');
      expect(url).toContain('tool=Selenium+Webdriver');
      expect(url).toContain('continents=SA');
      expect(url).toContain('Browser+Commands');
      expect(url).toContain('Navigation+Commands');
      expect(url).toContain('Switch+Commands');
      expect(url).toContain('Wait+Commands');
      expect(url).toContain('WebElement+Commands');
      expect(url).toContain('photo=betyIcon.jpg');
      expect(url).toContain('submit');
    });

    describe('and I click on the download link', () => {
      let fileExists;
      const personalInformationPage = new PersonalInformationPage();

      beforeEach(async () => {
        await personalInformationPage.download();
      });

      it('then the xlsx file should be downloaded', async () => {
        fileExists = personalInformationPage.validateFileDownloaded();
        expect(fileExists).toBe(true);
      });
    });
  });
});
