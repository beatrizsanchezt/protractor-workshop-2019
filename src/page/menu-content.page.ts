import {
  element,
  by,
  ElementFinder,
  browser,
  ExpectedConditions,
} from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  public async selectOptionMenu(menu: string): Promise<void> {
    this.tShirtMenu = element(by.linkText(menu));
    const expectedCondition = ExpectedConditions;
    const isClickable = expectedCondition.elementToBeClickable(this.tShirtMenu);
    await browser.wait(isClickable, 3000, `Menu option ${menu} is not clickable.`);
    await this.tShirtMenu.click();
  }
}
