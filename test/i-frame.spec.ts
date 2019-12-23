import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given I am an SDET learning i-frames in Protractor', () => {
  const iFramePage: IFramePage = new IFramePage();
  describe('when I open the i-frame test page', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
    });

    it('then I should see the page title', async () => {
      await expect(iFramePage.getPageTitle()).toEqual('Sample Iframe page');
    });

    describe('and verify the iframe', () => {
      beforeAll(async () => {
        await iFramePage.switchToFrame();

        it('then I should see the i-frame title', async () => {
          await expect(iFramePage.getPageTitle()).toEqual('Automation Tools Tutorial');
        });

        describe('and verify the page', () => {
          beforeAll(async () => {
            await iFramePage.switchToMainPage;
          });
          it('the page title should not change', async () => {
            await expect(iFramePage.getPageTitle()).toEqual('Sample Iframe page');
          });
        });
      });
    });

    describe('when I change the height', () => {
      beforeAll(async () => {
        await browser.get('http://toolsqa.com/iframe-practice-page/');
        await iFramePage.setFormFrameHeight(20);
      });

      it('then the high should be modified', async () => {
        await expect(iFramePage.getHeight()).toEqual(20);
      });
    });
  });
});
