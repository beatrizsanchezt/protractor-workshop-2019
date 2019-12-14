import { $, ElementFinder } from "protractor";

export class BankPaymentPage {
  private confirmOrderOption: ElementFinder;

  constructor() {
    this.confirmOrderOption = $("#cart_navigation > button > span");
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderOption.click();
  }
}
