
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#020617] text-white border-t border-white/10 pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-1">
            <span class="text-2xl font-bold tracking-tight mb-6 block">
              Trendio<span class="text-cyan-500">Marketing</span>
            </span>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Elevating brands through data-driven strategies and creative innovation. We make you trend.
            </p>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/trendiomarketing" target="_blank" rel="noopener noreferrer" aria-label="Follow TrendioMarketing on Facebook" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://pk.linkedin.com/in/muteeullahqarni" target="_blank" rel="noopener noreferrer" aria-label="Connect with Mutee Ullah Qarni on LinkedIn" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/trendiomarketingig/" target="_blank" rel="noopener noreferrer" aria-label="Follow TrendioMarketing on Instagram" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2c2.716 0 3.056.012 4.122.06 1.065.048 1.791.218 2.427.465a4.9 4.9 0 011.772 1.153 4.9 4.9 0 011.153 1.772c.247.636.417 1.363.465 2.427.048 1.066.06 1.406.06 4.122s-.012 3.056-.06 4.122c-.048 1.065-.218 1.791-.465 2.427a4.9 4.9 0 01-1.153 1.772 4.9 4.9 0 01-1.772 1.153c-.636.247-1.363.417-2.427.465-1.066.048-1.406.06-4.122.06s-3.056-.012-4.122-.06c-1.065-.048-1.791-.218-2.427-.465a4.9 4.9 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.247-.636-.417-1.363-.465-2.427-.048-1.066-.06-1.406-.06-4.122s.012-3.056.06-4.122c.048-1.065.218-1.791.465-2.427a4.9 4.9 0 011.153-1.772A4.9 4.9 0 015.45 2.525c.636-.247 1.363-.417 2.427-.465C8.944 2.013 9.284 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clip-rule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <!-- Services Links -->
          <div>
            <h3 class="text-white font-bold mb-6 tracking-wide text-sm uppercase">Services</h3>
            <ul class="space-y-3 text-sm text-slate-400">
              <li><a routerLink="/services" class="hover:text-cyan-400 transition-colors flex items-center group"><span class="w-0 group-hover:w-2 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>Web Development</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-400 transition-colors flex items-center group"><span class="w-0 group-hover:w-2 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>Graphics Design</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-400 transition-colors flex items-center group"><span class="w-0 group-hover:w-2 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>Social Media Ads</a></li>
              <li><a routerLink="/services" class="hover:text-cyan-400 transition-colors flex items-center group"><span class="w-0 group-hover:w-2 h-[1px] bg-cyan-400 mr-0 group-hover:mr-2 transition-all"></span>Digital Art</a></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="text-white font-bold mb-6 tracking-wide text-sm uppercase">Company</h3>
            <ul class="space-y-3 text-sm text-slate-400">
              <li><a routerLink="/about" class="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a routerLink="/contact" class="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a routerLink="/privacy" class="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a routerLink="/terms" class="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-white font-bold mb-6 tracking-wide text-sm uppercase">Contact Us</h3>
            <ul class="space-y-4 text-sm text-slate-400">
              <li class="flex items-start">
                <svg class="w-5 h-5 mr-3 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span class="hover:text-white transition-colors cursor-pointer">MarketingTrendio&#64;gmail.com</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 mr-3 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Silicon Valley, Digital Cloud<br>Operating Globally</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-slate-600">© 2024 TrendioMarketing. All rights reserved.</p>
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span class="text-xs text-slate-400 font-mono">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}