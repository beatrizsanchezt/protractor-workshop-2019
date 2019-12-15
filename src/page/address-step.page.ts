import {
  element, by,
  ElementFinder,
  ExpectedConditions,
  browser
} from "protractor";

export class AddressStepPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = element(by.partialButtonText('checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(
      this.proceedToCheckOutOption
    );
    await browser.wait(isClickable, 3000);
    await this.proceedToCheckOutOption.click();
  }
}
