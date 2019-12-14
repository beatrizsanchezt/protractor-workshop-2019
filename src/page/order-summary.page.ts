import { $, ElementFinder } from "protractor";

export class OrderSummaryPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = $(".cart_navigation span");
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.proceedToCheckOutOption.click();
  }
}
