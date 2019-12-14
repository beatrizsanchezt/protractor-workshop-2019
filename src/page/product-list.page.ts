import { $, ElementFinder } from "protractor";

export class ProductListPage {
  private tShirtAddToCartOption: ElementFinder;

  constructor() {
    this.tShirtAddToCartOption = $(
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    );
  }

  public async tShirtAddToCart(): Promise<void> {
    await this.tShirtAddToCartOption.click();
  }
}
