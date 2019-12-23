import {
  element,
  by,
  ExpectedConditions,
  browser,
  ElementFinder,
} from 'protractor';

export class AddressStepPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = element(by.partialButtonText('checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    const expectedCondition = ExpectedConditions;
    const isClickable = expectedCondition.elementToBeClickable(
      this.proceedToCheckOutOption,
    );
    await browser.wait(
      isClickable,
      3000,
      'Proceed to checkout option is not clickable',
    );
    await this.proceedToCheckOutOption.click();
  }
}
