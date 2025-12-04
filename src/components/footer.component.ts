import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-1">
            <span class="text-2xl font-bold text-slate-900 dark:text-white mb-4 block">
              Trendio<span class="text-cyan-600 dark:text-cyan-400">Marketing</span>
            </span>
            <p class="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Elevating brands through data-driven strategies and creative innovation. We make you trend.
            </p>
            <div class="flex space-x-4">
              <!-- Facebook Link -->
              <a href="https://www.facebook.com/trendiomarketing" target="_blank" rel="noopener noreferrer" class="text-slate-400 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="Visit us on Facebook">
                 <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <!-- Services Links -->
          <div>
            <h3 class="text-slate-900 dark:text-white font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-gray-400">
              <li><a routerLink="/services" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Graphics Design</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Social Media Ads</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Digital Art</a></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="text-slate-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-gray-400">
              <li><a routerLink="/about" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a routerLink="/portfolio" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a routerLink="/contact" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a routerLink="/privacy" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a routerLink="/terms" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-slate-900 dark:text-white font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-gray-400">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                MarketingTrendio&#64;gmail.com
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Silicon Valley, Digital Cloud
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-slate-500 dark:text-gray-500">© 2024 TrendioMarketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}