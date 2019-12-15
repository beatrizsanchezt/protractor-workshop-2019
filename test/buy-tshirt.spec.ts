import { browser } from "protractor";
import { MenuContentPage } from "../src/page";
import { ProductListPage } from "../src/page";
import { ProductAddedModalPage } from "../src/page";
import { OrderSummaryPage } from "../src/page";
import { SignInStepPage } from "../src/page";
import { AddressStepPage } from "../src/page";
import { ShippingStepPage } from "../src/page";
import { PaymentStepPage } from "../src/page";
import { BankPaymentPage } from "../src/page";
import { SummaryStepPage } from "../src/page";

describe("Buy a t-shirt", () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it("then should be bought a t-shirt", async () => {
    await browser.get("http://automationpractice.com/");

    await menuContentPage.goToTShirtMenu();
    //await(browser.sleep(3000));
    await productListPage.tShirtAddToCart();
    //await(browser.sleep(3000));
    await productAddedModalPage.proceedToCheckOut();
    //await(browser.sleep(3000));
    await orderSummaryPage.proceedToCheckOut();
    await signInStepPage.signIn();
    await addressStepPage.proceedToCheckOut();
    await shippingStepPage.proceedToCheckOut();
    await paymentStepPage.bankPayment();
    await bankPaymentPage.confirmOrder();
    await expect(summaryStepPage.ConfirmationMessage).toBe(
      "Your order on My Store is complete."
    );
  });
});
