import { $, ElementFinder } from "protractor";

export class AddressStepPage {
  private proceedToCheckOutOption: ElementFinder;

  constructor() {
    this.proceedToCheckOutOption = $(
      "#center_column > form > p > button > span"
    );
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.proceedToCheckOutOption.click();
  }
}
