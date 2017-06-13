import { AndreasCVPage } from './app.po';

describe('andreas-cv App', () => {
  let page: AndreasCVPage;

  beforeEach(() => {
    page = new AndreasCVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
