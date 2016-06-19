import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2HttpServiceAppComponent, environment } from './app/';

import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2HttpServiceAppComponent, [HTTP_PROVIDERS]);

