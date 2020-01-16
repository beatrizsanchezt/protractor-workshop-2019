import {
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  browser,
} from 'protractor';

export class PaymentStepPage {
  private bankPaymentOption: ElementFinder;

  constructor() {
    this.bankPaymentOption = element(by.partialLinkText('Pay by bank wire'));
  }

  public async bankPayment(): Promise<void> {
    const expectedCondition = ExpectedConditions;
    const isClickable = expectedCondition.elementToBeClickable(
      this.bankPaymentOption,
    );
    await browser.wait(isClickable, 30000, 'Pay by bank wire is not clickable.');

    await this.bankPaymentOption.click();
  }
}
