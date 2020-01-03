import { browser } from 'protractor';
import { Continents, SeleniumCommands, PersonalInformationPage } from '../src/page';

describe('Given I´m a Protractor learner', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  describe('When I navigate to the practice page', () => {
    beforeEach(async () => {
      browser.driver
      .manage()
      .window()
      .maximize();
      await browser.get('http://toolsqa.com/automation-practice-form/');
    });

    it('then I should receive a confirmation', async () => {
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
        '/resources/betyIcon.jpg',
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
    it('then I should download a file', async () => {
      let tempBuffer = '';
      tempBuffer = (await personalInformationPage.download()).toString();
      expect(tempBuffer).not.toBe('');
    });
  });
});
