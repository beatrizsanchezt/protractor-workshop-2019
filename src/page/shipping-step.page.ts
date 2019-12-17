import { element, by, ElementFinder } from "protractor";

export class ShippingStepPage {
  private termsOfUSeOption: ElementFinder;
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.termsOfUSeOption = element(by.id("cgv"));
    this.proceedToCheckOutOption = element(by.cssContainingText('button', 'Proceed to checkout'));
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.termsOfUSeOption.click();
    await this.proceedToCheckOutOption.click();
  }
}
