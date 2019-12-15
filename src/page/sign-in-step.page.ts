import {
  $,
  element,
  by,
  ElementFinder,
} from "protractor";

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private submmitOption: ElementFinder;

  constructor() {
    this.emailInput = element(by.id("email"));
    this.passwordInput = $("#passwd");
    this.submmitOption = element(by.buttonText("Sign in"));
  }

  public async signIn(): Promise<void> {
    await this.emailInput.sendKeys("aperdomobo@gmail.com");
    await this.passwordInput.sendKeys("WorkshopProtractor");
    await this.submmitOption.click();
  }
}
