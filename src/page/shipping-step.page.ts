import { element, by, ElementFinder, browser } from "protractor";

export class ShippingStepPage {
  private termsOfUSeOption: ElementFinder;
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.termsOfUSeOption = element(by.id("cgv"));
    this.proceedToCheckOutOption = element(by.cssContainingText('button', 'Proceed to checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    this.termsOfUSeOption.click();
    await browser.sleep(3000);
    await this.proceedToCheckOutOption.click();
  }
}
