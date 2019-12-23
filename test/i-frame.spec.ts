import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given a SDET learning i-frames in Protractor', () => {
  const iFramePage: IFramePage = new IFramePage();
  describe('when open the i-frame page and change the height', () => {
    beforeAll(async () => {
      await browser.get('http://toolsqa.com/iframe-practice-page/');
      await iFramePage.setFormFrameHeight(20);
    });

    it('then the high will be modified', async () => {
      await expect(iFramePage.getHeight()).toEqual(20);
    });
  });
});
