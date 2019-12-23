import {
  element,
  by,
  ElementFinder,
  ExpectedConditions,
  browser,
} from 'protractor';

export class BankPaymentPage {
  private confirmOrderOption: ElementFinder;

  constructor() {
    this.confirmOrderOption = element(by.buttonText('I confirm my order'));
  }

  public async confirmOrder(): Promise<void> {
    const expectedCondition = ExpectedConditions;
    const isClickable = expectedCondition.elementToBeClickable(
      this.confirmOrderOption,
    );
    await browser.wait(isClickable, 3000, 'Option for confirm the order is not clickable');
    await this.confirmOrderOption.click();
  }
}
