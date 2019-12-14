import { $, ElementFinder } from "protractor";

export class SummaryStepPage {
  private confirmationMessage: ElementFinder;

  constructor() {
    this.confirmationMessage = $("#center_column > div > p > strong");
  }

  public get ConfirmationMessage() {
    return this.confirmationMessage.getText();
  }
}
