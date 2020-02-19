import {
  element, by, ElementFinder, ExpectedConditions, browser,
} from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = element(by.linkText('Proceed to checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    const expectedCondition = ExpectedConditions;
    const isClickable = expectedCondition.elementToBeClickable(this.proceedToCheckOutOption);
    await browser.wait(isClickable, 30000, 'Proceed to checkout is not clickable.');
    await this.proceedToCheckOutOption.click();
  }
}
