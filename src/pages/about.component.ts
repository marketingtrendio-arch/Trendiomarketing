import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-slate-900 pt-10 pb-20 transition-colors duration-300 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Story Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 animate-slide-up">
          <div>
            <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-6">Who We Are</h1>
            <p class="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              TrendioMarketing was engineered to be different. In a world of digital noise, we build systems that generate powerful signals for growth.
            </p>
            <p class="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              We are a globally-distributed collective of data scientists, creative strategists, and performance engineers, united by a single mission: to architect your brand's digital ascent.
            </p>
            <div class="flex gap-4">
              <div class="text-center p-4 glass-panel rounded-lg w-32 bg-white/50 dark:bg-white/5">
                <span class="block text-3xl font-bold text-cyan-600 dark:text-cyan-400">5+</span>
                <span class="text-sm text-slate-500 dark:text-gray-400">Years XP</span>
              </div>
              <div class="text-center p-4 glass-panel rounded-lg w-32 bg-white/50 dark:bg-white/5">
                <span class="block text-3xl font-bold text-purple-600 dark:text-purple-400">200+</span>
                <span class="text-sm text-slate-500 dark:text-gray-400">Clients</span>
              </div>
            </div>
          </div>
          <div class="relative animate-slide-up delay-200">
             <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl transform rotate-3 blur opacity-30"></div>
             <img src="https://picsum.photos/600/500?grayscale" alt="Team working" class="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover">
          </div>
        </div>

        <!-- Values Section -->
        <div class="text-center mb-16 animate-slide-up delay-300">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-10">Our Core Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-panel p-8 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:scale-105 transition-transform duration-300">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Innovation First</h3>
              <p class="text-slate-600 dark:text-gray-400">We don't follow trends; we engineer them. Our R&amp;D approach means we are perpetually at the bleeding edge of marketing technology and platform strategy.</p>
            </div>
            <div class="glass-panel p-8 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:scale-105 transition-transform duration-300 delay-100">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Driven</h3>
              <p class="text-slate-600 dark:text-gray-400">Creativity is our weapon, data is our guidance system. Every decision is backed by deep analytics to ensure maximum impact and measurable ROI.</p>
            </div>
            <div class="glass-panel p-8 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:scale-105 transition-transform duration-300 delay-200">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Radical Transparency</h3>
              <p class="text-slate-600 dark:text-gray-400">We provide a clear, real-time view into campaign performance. No jargon—just actionable insights and a shared path to victory.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}