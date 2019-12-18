import {
  element,
  by,
  ElementFinder,
  browser,
  ExpectedConditions
} from "protractor";

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  public async selectOptionMenu(menu: string): Promise<void> {
    this.tShirtMenu = element(by.linkText(menu));
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(this.tShirtMenu);
    await browser.wait(isClickable, 3000);
    await this.tShirtMenu.click();
  }
}
