import { $, ElementFinder } from "protractor";

export class OrderSummaryPage {
  private confirmationMessage: ElementFinder;

  constructor() {
    this.confirmationMessage = $("#center_column > div > p > strong");
  }

  public async ConfirmationMessage(): Promise<String> {
    return this.confirmationMessage.getText();
  }
}
