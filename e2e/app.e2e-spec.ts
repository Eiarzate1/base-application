import { BaseApplicationPage } from './app.po';

describe('base-application App', () => {
  let page: BaseApplicationPage;

  beforeEach(() => {
    page = new BaseApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
