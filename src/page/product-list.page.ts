import { ElementFinder, browser, ExpectedConditions, element, by } from "protractor";

export class ProductListPage {
  private tShirtAddToCartOption: ElementFinder;
  private productOption : ElementFinder;

  constructor() {
    this.tShirtAddToCartOption = element(by.linkText('Add to cart'));

    this.productOption = element(by.linkText('Faded Short Sleeve T-shirts'));
  }

  public async tShirtAddToCart(): Promise<void> {


    var expectedCondition = ExpectedConditions;
    await browser.actions().mouseMove(this.productOption).perform();
    var isClickable = expectedCondition.visibilityOf(this.tShirtAddToCartOption);
    await browser.wait(isClickable, 5000);
    await this.tShirtAddToCartOption.click();
  }
}
