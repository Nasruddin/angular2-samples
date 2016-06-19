import { Angular2HttpServicePage } from './app.po';

describe('angular2-http-service App', function() {
  let page: Angular2HttpServicePage;

  beforeEach(() => {
    page = new Angular2HttpServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-http-service works!');
  });
});
