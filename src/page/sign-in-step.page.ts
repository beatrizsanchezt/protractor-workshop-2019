import { $, ElementFinder } from "protractor";

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private submmitOption: ElementFinder;

  constructor() {
    this.emailInput = $("#email");
    this.passwordInput = $("#passwd");
    this.submmitOption = $("#SubmitLogin > span");
  }

  public async signIn(): Promise<void> {
    await this.emailInput.sendKeys("aperdomobo@gmail.com");
    await this.passwordInput.sendKeys("WorkshopProtractor");
    await this.submmitOption.click();
  }
}
