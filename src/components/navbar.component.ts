import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 dark:border-white/5 bg-white/70 dark:bg-[#020617]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#020617]/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 cursor-pointer group" routerLink="/">
            <span class="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center">
              TrendioMarketing
              <!-- Static Dot -->
              <span class="w-2.5 h-2.5 bg-cyan-400 rounded-full ml-2"></span>
            </span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path"
                   routerLinkActive="text-cyan-600 dark:text-cyan-400 active-underline"
                   [routerLinkActiveOptions]="{exact: item.path === '/'}"
                   class="relative text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 py-2 group">
                  {{ item.label }}
                  <!-- Animated Underline -->
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full group-[.active-underline]:w-full"></span>
                </a>
              }
              
              <a routerLink="/contact" class="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-px">
                Get Started
              </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center gap-4">
            <button (click)="toggleMobileMenu()"
                    class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none">
              <span class="sr-only">Open main menu</span>
              @if (!isMobileMenuOpen()) {
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              } @else {
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden absolute w-full h-screen bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 animate-fade-in">
          <div class="px-6 pt-8 pb-3 space-y-4">
            @for (item of navItems; track item.path) {
              <a [routerLink]="item.path"
                 (click)="toggleMobileMenu()"
                 routerLinkActive="text-cyan-600 dark:text-cyan-400 pl-4 border-l-4 border-cyan-500"
                 [routerLinkActiveOptions]="{exact: item.path === '/'}"
                 class="block text-2xl font-bold text-slate-800 dark:text-white py-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {{ item.label }}
              </a>
            }
            <div class="flex items-stretch gap-4 pt-4">
              <a routerLink="/contact" (click)="toggleMobileMenu()" class="flex-grow bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-4 rounded-xl text-lg font-bold shadow-lg shadow-cyan-500/20">
                Start Project
              </a>
            </div>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}