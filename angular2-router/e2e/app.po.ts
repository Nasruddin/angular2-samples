export class Angular2RouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-router-app h1')).getText();
  }
}
