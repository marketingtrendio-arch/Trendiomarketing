import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestimonialsComponent } from '../components/testimonials.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TestimonialsComponent, NgOptimizedImage],
  template: `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-40 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img ngSrc="https://picsum.photos/seed/trendio_workspace_real/1920/1080" priority fill alt="A professional digital marketing workspace scene" class="object-cover opacity-15 dark:opacity-40 animate-fade-in grayscale-[20%] dark:grayscale-0">
        <!-- Light Mode Gradient Overlay: Softer fade -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/70 to-[#F8FAFC] dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/90 via-transparent to-[#F8FAFC]/90 dark:from-slate-900/90 dark:via-transparent dark:to-slate-900/90"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyan-500/20 bg-white/50 dark:bg-cyan-500/10 backdrop-blur-md shadow-sm dark:shadow-none hover:bg-white/80 dark:hover:bg-cyan-500/20 transition-colors cursor-default animate-slide-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span class="text-cyan-700 dark:text-cyan-300 text-sm font-semibold tracking-wide uppercase">Accepting New Clients</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 leading-tight animate-slide-up delay-100">
          <span class="block text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl">We Don't Just Market.</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-500 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 drop-shadow-md">We Create Trends.</span>
        </h1>
        
        <p class="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-12 leading-relaxed font-light animate-slide-up delay-200">
          TrendioMarketing is the world-class agency for high-impact growth strategies, stunning design, and next-gen development.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up delay-300">
          <a routerLink="/contact" class="px-10 py-5 bg-gradient-primary rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 ring-offset-2 ring-offset-[#F8FAFC] dark:ring-offset-slate-900 focus:ring-2 focus:ring-cyan-500 shadow-md">
            Start Your Project
          </a>
          <a routerLink="/portfolio" class="px-10 py-5 glass-panel border border-slate-300 dark:border-white/10 rounded-full text-slate-800 dark:text-white font-bold text-lg hover:bg-white dark:hover:bg-white/10 transition-all backdrop-blur-md group bg-white/50 dark:bg-transparent shadow-sm hover:shadow-md">
            View Our Work <span class="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-slide-up delay-100">
          <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Expertise</h2>
          <div class="h-1.5 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p class="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">A complete ecosystem of digital services designed to dominate your market.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="glass-panel card-clean-light p-8 rounded-2xl card-hover group cursor-pointer animate-slide-up delay-200" routerLink="/services">
            <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 transition-colors duration-300">
              <svg class="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Web Development</h3>
            <p class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">Custom WordPress & Shopify solutions that drive sales and look stunning on every device.</p>
            <span class="text-cyan-600 dark:text-cyan-400 font-semibold group-hover:text-cyan-500 dark:group-hover:text-cyan-300 flex items-center">Explore <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
          </div>

          <!-- Service 2 -->
          <div class="glass-panel card-clean-light p-8 rounded-2xl card-hover group cursor-pointer animate-slide-up delay-300" routerLink="/services">
             <div class="w-16 h-16 bg-purple-100 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 transition-colors duration-300">
               <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Social Advertising</h3>
            <p class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">Dominating FB, Insta, TikTok & Google with data-backed ad campaigns that convert.</p>
            <span class="text-purple-600 dark:text-purple-400 font-semibold group-hover:text-purple-500 dark:group-hover:text-purple-300 flex items-center">Explore <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
          </div>

          <!-- Service 3 -->
          <div class="glass-panel card-clean-light p-8 rounded-2xl card-hover group cursor-pointer animate-slide-up delay-400" routerLink="/services">
             <div class="w-16 h-16 bg-pink-100 dark:bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 dark:group-hover:bg-pink-500/20 transition-colors duration-300">
              <svg class="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Creative Design</h3>
            <p class="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">From logos to digital art, we craft visual identities that stick in your customer's mind.</p>
            <span class="text-pink-600 dark:text-pink-400 font-semibold group-hover:text-pink-500 dark:group-hover:text-pink-300 flex items-center">Explore <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm animate-fade-in delay-200 border-y border-slate-200 dark:border-white/5">
      <div class="text-center mb-10 px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Client Love</h2>
        <p class="text-slate-600 dark:text-gray-400">Trusted by market leaders globally.</p>
      </div>
      <app-testimonials />
    </section>

    <!-- Portfolio Preview -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 animate-slide-up">
           <div>
             <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
             <p class="text-slate-600 dark:text-gray-400 text-lg">Recent masterpieces from our studio.</p>
           </div>
           <a routerLink="/portfolio" class="hidden md:flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-white transition-colors font-medium border-b border-cyan-400/30 hover:border-cyan-800 dark:hover:border-white pb-1">View All Projects <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <!-- Project 1 -->
           <div class="group relative overflow-hidden rounded-xl aspect-[4/3] bg-white dark:bg-gray-800 cursor-pointer shadow-lg dark:shadow-black/50 animate-slide-up delay-100" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/tiktok_ads_real/800/600" width="800" height="600" alt="TikTok Ads Manager Dashboard" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 dark:opacity-80 group-hover:opacity-90 dark:group-hover:opacity-100 transition-opacity"></div>
             <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
               <h4 class="text-white font-bold text-2xl mb-1">Viral TikTok Campaign</h4>
               <p class="text-cyan-300 dark:text-cyan-400 font-medium">Video Marketing</p>
             </div>
           </div>
           <!-- Project 2 -->
           <div class="group relative overflow-hidden rounded-xl aspect-[4/3] bg-white dark:bg-gray-800 cursor-pointer shadow-lg dark:shadow-black/50 animate-slide-up delay-200" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/shopify_dev_real/800/600" width="800" height="600" alt="Shopify Store Interface Design" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 dark:opacity-80 group-hover:opacity-90 dark:group-hover:opacity-100 transition-opacity"></div>
             <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
               <h4 class="text-white font-bold text-2xl mb-1">Luxe E-Commerce</h4>
               <p class="text-green-300 dark:text-green-400 font-medium">Shopify Development</p>
             </div>
           </div>
           <!-- Project 3 -->
           <div class="group relative overflow-hidden rounded-xl aspect-[4/3] bg-white dark:bg-gray-800 cursor-pointer shadow-lg dark:shadow-black/50 animate-slide-up delay-300" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/digital_art_real/800/600" width="800" height="600" alt="Digital Art Creation" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 dark:opacity-80 group-hover:opacity-90 dark:group-hover:opacity-100 transition-opacity"></div>
             <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
               <h4 class="text-white font-bold text-2xl mb-1">Neo-Tokyo Brand</h4>
               <p class="text-pink-300 dark:text-pink-400 font-medium">Digital Illustration</p>
             </div>
           </div>
        </div>
        <div class="mt-10 text-center md:hidden">
          <a routerLink="/portfolio" class="text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-400/30 px-6 py-3 rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-400/10">View All Projects &rarr;</a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 relative overflow-hidden animate-fade-in delay-300">
      <div class="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl mx-4"></div>
      
      <div class="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">Ready to Scale Your Business?</h2>
        <p class="text-slate-600 dark:text-gray-300 mb-12 text-xl max-w-2xl mx-auto">Join hundreds of successful brands who chose Trendio. Let's build something extraordinary together.</p>
        <a routerLink="/contact" class="inline-block px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-extrabold text-xl rounded-full hover:scale-105 transition-transform shadow-2xl shadow-slate-900/10 dark:shadow-white/10 glass-panel border-0">
          Get Your Free Proposal
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {}