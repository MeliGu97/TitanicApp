import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';

import { AuthService } from '../services/auth.service';
import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), AuthService]
};
