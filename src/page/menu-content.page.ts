import {element, by, ElementFinder, browser, ExpectedConditions} from "protractor";

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = element(by.linkText('T-SHIRTS'));
  }

  public async goToTShirtMenu(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(this.tShirtMenu);
    await browser.wait(isClickable, 3000);
    await this.tShirtMenu.click();
  }
}
