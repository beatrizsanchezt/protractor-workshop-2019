import {
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  browser
} from "protractor";

export class BankPaymentPage {
  private confirmOrderOption: ElementFinder;

  constructor() {
    this.confirmOrderOption = element(by.buttonText("I confirm my order"));
  }

  public async confirmOrder(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(
      this.confirmOrderOption
    );
    await browser.wait(isClickable, 3000);
    await this.confirmOrderOption.click();
  }
}
