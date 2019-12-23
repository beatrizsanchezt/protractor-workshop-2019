import { element, by, $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {

  private iframe1: ElementFinder;
  constructor() {
    this.iframe1 = element(by.id('IF1'));
  }

  public async getHeight() {
    const height = await this.iframe1.getAttribute('height');
    return Number.parseInt(height, 10);
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getPageTitle() {
    let titleElement : ElementFinder;
    titleElement = await $('#content h1');
    return await titleElement.getText();
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
