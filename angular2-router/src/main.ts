import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { Angular2RouterAppComponent, environment } from './app/';

import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2RouterAppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);

