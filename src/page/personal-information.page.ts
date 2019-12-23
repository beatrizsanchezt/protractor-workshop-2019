import {
  $,
  element,
  by,
  ElementFinder,
  browser,
  ExpectedConditions,
} from 'protractor';

export enum Continents {
  'Asia' = 'AS',
  'Europe' = 'EU',
  'Africa' = 'AF',
  'Australia' = 'AUS',
  'South America' = 'SA',
  'North America' = 'NA',
  'Antarctica' = 'AN'
}

export enum SeleniumCommands {
  'Browser Commands',
  'Navigation Commands',
  'Switch Commands',
  'Wait Commands',
  'WebElement Commands'
}

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private continentDropDown: ElementFinder;
  private commandsMultiSelect: ElementFinder;
  private firstButton: ElementFinder;
  private closeAddOption: ElementFinder;

  constructor() {
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.id('lastname'));
    this.continentDropDown = element(by.id('continents'));
    this.commandsMultiSelect = element(by.id('selenium_commands'));
    this.firstButton = $('#submit');
    this.closeAddOption = $('[alt=close-link]');
  }

  private async selectByValue(value: string | number) {
    const elementByValue = $(`[value="${value}"]`);
    await browser.executeScript(
      'arguments[0].click();',
      elementByValue.getWebElement(),
    );
  }

  private async selectContinent(continent: Continents) {
    let continentOption : ElementFinder;
    continentOption = this.continentDropDown.$(`[value="${continent}"]`);
    await continentOption.click();
  }

  private async selectCommands(seleniumCommand : SeleniumCommands) {
    let command : ElementFinder;
    command = await this.commandsMultiSelect.$$('option').get(seleniumCommand);
    await command.click();
  }

  public async fillForm(
    firstName: string,
    lastName: string,
    sex: string,
    experience: number,
    profession: string,
    tools: string[],
    continent: Continents,
    commands: SeleniumCommands[],
  ): Promise<void> {
    const expectedCondition = ExpectedConditions;
    const isVisible = expectedCondition.visibilityOf(this.closeAddOption);
    await browser.wait(isVisible, 30000, 'Add close option is not visible.');
    await this.closeAddOption.click();
    await this.firstName.sendKeys(firstName);
    await this.lastName.sendKeys(lastName);
    await this.selectByValue(sex);
    await this.selectByValue(experience);
    await this.selectByValue(profession);
    tools.forEach(async item => await this.selectByValue(item));
    await this.selectContinent(continent);
    const promises = commands.map(command => this.selectCommands(command));
    await Promise.all(promises);

    await browser.executeScript(
      'arguments[0].click();',
      this.firstButton.getWebElement(),
    );
  }
}
