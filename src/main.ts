import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this

bootstrapApplication(App, {
  providers: [
     provideRouter(routes),
    provideHttpClient()  // ✅ Add this line
  ]
}).catch(err=>console.error(err))