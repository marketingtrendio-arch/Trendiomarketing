import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { AppComponent } from './src/app.component';

const routes: Routes = [
  { path: '', loadComponent: () => import('./src/pages/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./src/pages/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./src/pages/services.component').then(m => m.ServicesComponent) },
  { path: 'portfolio', loadComponent: () => import('./src/pages/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'contact', loadComponent: () => import('./src/pages/contact.component').then(m => m.ContactComponent) },
  { path: 'privacy', loadComponent: () => import('./src/pages/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'terms', loadComponent: () => import('./src/pages/terms.component').then(m => m.TermsComponent) },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.