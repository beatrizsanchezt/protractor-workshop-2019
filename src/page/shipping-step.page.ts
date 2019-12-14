import { $, ElementFinder, browser } from "protractor";

export class ShippingStepPage {
  private termsOfUSeOption: ElementFinder;
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.termsOfUSeOption = $("#cgv");
    this.proceedToCheckOutOption = $("#form > p > button > span");
  }

  public async proceedToCheckOut(): Promise<void> {
    this.termsOfUSeOption.click();
    await browser.sleep(3000);
    await this.proceedToCheckOutOption.click();
  }
}
