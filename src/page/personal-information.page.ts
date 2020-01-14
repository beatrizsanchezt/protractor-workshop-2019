import {
  $,
  element,
  by,
  ElementFinder,
  browser,
  ExpectedConditions,
} from 'protractor';

import { FileService } from '../../src/service';

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
  private linkTestFile: ElementFinder;
  private uploadFileButton: ElementFinder;
  private fileService = new FileService();
  private downloadFileName = 'temp/test.xlsx';

  constructor() {
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.id('lastname'));
    this.continentDropDown = element(by.id('continents'));
    this.commandsMultiSelect = element(by.id('selenium_commands'));
    this.firstButton = $('#submit');
    this.linkTestFile = element(by.linkText('Test File to Download'));
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

  private async submit() {
    await browser.executeScript(
      'arguments[0].click();',
      this.firstButton.getWebElement());
  }

  private async uploadFile (filePath : string) {
    const fileValid = this.fileService.validateFile(filePath);
    if (fileValid) {
      const expectedCondition = ExpectedConditions;
      this.uploadFileButton = element(by.css('.input-file'));
      const isVisible = expectedCondition.visibilityOf(this.uploadFileButton);

      await browser.wait(isVisible, 30000, 'Link to upload a file is not visible.');
      await this.uploadFileButton.sendKeys(`${process.cwd()}\\${filePath}`);
    }
  }

  public validateFileDownloaded(): boolean {
    return this.fileService.validateFile(this.downloadFileName);
  }

  public async download () {
    const expectedCondition = ExpectedConditions;
    const isVisible = expectedCondition.visibilityOf(this.linkTestFile);

    await browser.wait(isVisible, 30000, 'Link to download file is not visible.');
    const link = await this.linkTestFile.getAttribute('href');
    await this.fileService.downloadFile(link, this.downloadFileName);
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
    file?: string,
  ): Promise<void> {
    await this.firstName.sendKeys(firstName);
    await this.lastName.sendKeys(lastName);
    await this.selectByValue(sex);
    await this.selectByValue(experience);
    await this.selectByValue(profession);
    tools.forEach(async item => await this.selectByValue(item));
    await this.selectContinent(continent);
    const promises = commands.map(command => this.selectCommands(command));
    await Promise.all(promises);
    await this.uploadFile(file);
    await this.submit();
  }
}
