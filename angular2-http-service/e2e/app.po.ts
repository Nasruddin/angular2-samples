export class Angular2HttpServicePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-http-service-app h1')).getText();
  }
}
