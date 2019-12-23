import { element, by, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = element(by.linkText('Proceed to checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.proceedToCheckOutOption.click();
  }
}
