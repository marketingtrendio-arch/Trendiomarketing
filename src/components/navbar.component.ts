
import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 w-full z-50 glass-panel border-b border-white/20 dark:border-white/5 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 cursor-pointer" routerLink="/">
            <span class="text-2xl font-bold tracking-tight text-slate-800 dark:text-white flex items-center">
              Trendio<span class="text-cyan-600 dark:text-cyan-400">Marketing</span>
              <span class="ml-1 h-2 w-2 rounded-full bg-gradient-primary"></span>
            </span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path"
                   routerLinkActive="text-cyan-600 dark:text-cyan-400 font-semibold"
                   [routerLinkActiveOptions]="{exact: item.path === '/'}"
                   class="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
                  {{ item.label }}
                  <span class="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              }
              
              <a routerLink="/contact" class="bg-gradient-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 shadow-md">
                Get Started
              </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center gap-4">
            <button (click)="toggleMobileMenu()"
                    class="bg-white/50 dark:bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none backdrop-blur-md border border-slate-200 dark:border-white/5">
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
        <div class="md:hidden glass-panel border-t border-slate-200 dark:border-white/10 absolute w-full h-screen bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
          <div class="px-4 pt-4 pb-3 space-y-2">
            @for (item of navItems; track item.path) {
              <a [routerLink]="item.path"
                 (click)="toggleMobileMenu()"
                 routerLinkActive="text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-white/5 font-semibold"
                 [routerLinkActiveOptions]="{exact: item.path === '/'}"
                 class="text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white block px-3 py-4 rounded-md text-lg font-medium border-b border-slate-100 dark:border-white/5">
                {{ item.label }}
              </a>
            }
             <a routerLink="/contact" (click)="toggleMobileMenu()" class="text-center w-full block mt-8 bg-gradient-primary text-white px-4 py-4 rounded-xl text-lg font-bold shadow-lg shadow-cyan-500/20">
                Get Started
              </a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  isMobileMenuOpen = signal(false);
  isDarkMode = signal(true);

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' }
  ];

  ngOnInit() {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      this.isDarkMode.set(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark
      this.isDarkMode.set(true);
      document.documentElement.classList.add('dark');
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
