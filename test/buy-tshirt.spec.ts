import { browser } from "protractor";
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from "../src/page";

describe("Given I´m a non authenticated user", () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  describe("When I navigate to the store web site", async () => {
    beforeAll(async () => {
      browser.driver.manage().window().setSize(1800, 2024);
      await browser.get("http://automationpractice.com/");
    });

    describe("and I select a T-Shirt to buy", async () => {
      beforeAll(async () => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.tShirtAddToCart();
        await productAddedModalPage.proceedToCheckOut();
        await summaryStepPage.proceedToCheckOut();
      });

      describe("and I log in", async () => {
        beforeAll(async () => {
          await signInStepPage.signIn();
        });

        describe("and I select my address", async () => {
          beforeAll(async () => {
            await addressStepPage.proceedToCheckOut();
            await shippingStepPage.proceedToCheckOut();
          });

          describe("and I pay", async () => {
            beforeAll(async () => {
              await paymentStepPage.bankPayment();
            });

            it("then I should receive a confirmation message", async () => {
              await bankPaymentPage.confirmOrder();
              expect(orderSummaryPage.ConfirmationMessage()).toBe(
                "Your order on My Store is complete."
              );
            });
          });
        });
      });
    });
  });
});
