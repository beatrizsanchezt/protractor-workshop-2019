import {
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  browser
} from "protractor";

export class PaymentStepPage {
  private bankPaymentOption: ElementFinder;

  constructor() {
    this.bankPaymentOption = element(by.partialLinkText("Pay by bank wire"));
  }

  public async bankPayment(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(
      this.bankPaymentOption
    );
    await browser.wait(isClickable, 3000);

    await this.bankPaymentOption.click();
  }
}
