import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JWTInterceptor } from './interceptor/jwt.interceptor';
import { SessionService } from './service/session.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
    //{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
    provideHttpClient(
      withInterceptors([
        new JWTInterceptor(new SessionService())
      ])
    )
  ]
};
