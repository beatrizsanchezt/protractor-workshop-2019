import {
  ElementFinder,
  browser,
  ExpectedConditions,
  element,
  by,
  ElementArrayFinder,
} from 'protractor';

export class ProductListPage {
  private tShirtAddToCartOption: ElementFinder;

  private products: ElementArrayFinder;

  constructor() {
    this.tShirtAddToCartOption = element(by.linkText('Add to cart'));
    this.products = element.all(by.css('.ajax_block_product'));
  }

  private findProduct(productName: string) {
    return this.products
      .filter(async (elem) => {
        const text = await elem.$('.product-name')
          .getText();
        return text === productName;
      }).first();
  }

  private async selectProduct(productName: string): Promise<void> {
    const product = await this.findProduct(productName).$('[itemprop=image]');
    browser.actions().mouseMove(product).perform();
  }

  public async addToCartProduct(productName: string): Promise<void> {
    const expectedCondition = ExpectedConditions;
    await this.selectProduct(productName);
    const isVisible = expectedCondition.visibilityOf(this.tShirtAddToCartOption);
    await browser.wait(isVisible, 30000, 'Option for add the produt to the car is not visible.');
    await this.tShirtAddToCartOption.click();
  }
}
