import { $, ElementFinder, ExpectedConditions, browser } from "protractor";

export class ProductListPage {
  private tShirtAddToCartOption: ElementFinder;

  constructor() {
    this.tShirtAddToCartOption = $(
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    );
  }

  public async tShirtAddToCart(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(this.tShirtAddToCartOption);
    await browser.wait(isClickable, 5000);
    await this.tShirtAddToCartOption.click();
  }
}
