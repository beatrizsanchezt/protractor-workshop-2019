import {$, ElementFinder, ExpectedConditions, browser } from "protractor";

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $("#block_top_menu > ul > li:nth-child(3) > a");
    //this.tShirtMenu = element(by.linkText('T-shirts'));
  }

  public async goToTShirtMenu(): Promise<void> {
    var expectedCondition = ExpectedConditions;
    var isClickable = expectedCondition.elementToBeClickable(this.tShirtMenu);
    await browser.wait(isClickable, 3000);
    await this.tShirtMenu.click();
  }
}
