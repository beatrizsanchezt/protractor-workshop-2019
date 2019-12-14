import { $, ElementFinder } from "protractor";

export class ProductAddedModalPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = $(
      '[style*="display: block;"] .button-container > a'
    );
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.proceedToCheckOutOption.click();
  }
}
