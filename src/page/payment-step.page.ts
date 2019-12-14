import { $, ElementFinder } from "protractor";

export class PaymentStepPage {
  private bankPaymentOption: ElementFinder;

  constructor() {
    this.bankPaymentOption = $("#HOOK_PAYMENT > div:nth-child(1) > div > p > a");
  }

  public async bankPayment(): Promise<void> {
    await this.bankPaymentOption.click();
  }
}
