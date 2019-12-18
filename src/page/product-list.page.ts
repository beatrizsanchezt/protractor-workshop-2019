import {
  ElementFinder,
  browser,
  ExpectedConditions,
  element,
  by,
  ElementArrayFinder
} from "protractor";

export class ProductListPage {
  private tShirtAddToCartOption: ElementFinder;
  private products: ElementArrayFinder;

  constructor() {
    this.tShirtAddToCartOption = element(by.linkText("Add to cart"));
    this.products = element.all(by.css(".ajax_block_product"));
  }

  private findProduct(productName: string) {
    return this.products
      .filter(async function(elem) {
        const text = await elem.$(".product-name")
          .getText();
        return text === productName;
      }).first();
  }

  private async selectProduct(productName: string): Promise<void> {
    var product = await this.findProduct(productName).$(".product-name");
    //await product.$(".img").click();
    //Changing this as clicking on the image opens the product description
    browser.actions().mouseMove(product).perform();
  }

  public async AddToCartProduct(productName: string): Promise<void> {
    var expectedCondition = ExpectedConditions;
    await this.selectProduct(productName);
    var isVisible = expectedCondition.visibilityOf(this.tShirtAddToCartOption);
    await browser.wait(isVisible, 3000);
    await this.tShirtAddToCartOption.click();
  }
}
