import { Angular2RouterPage } from './app.po';

describe('angular2-router App', function() {
  let page: Angular2RouterPage;

  beforeEach(() => {
    page = new Angular2RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-router works!');
  });
});
