import { $, ElementFinder, ExpectedConditions, browser } from "protractor";

export class ProductAddedModalPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = $(
      '[style*="display: block;"] .button-container > a'
    );
  }

  public async proceedToCheckOut(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(this.proceedToCheckOutOption);
    await browser.wait(isClickable, 8000);
    await this.proceedToCheckOutOption.click();
  }
}
