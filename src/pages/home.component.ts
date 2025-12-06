
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
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">

      <!-- Dynamic Background Layer -->
      <div class="absolute inset-0 z-0">
        <!-- Abstract Tech Background -->
        <img ngSrc="https://picsum.photos/seed/dark_forest_silhouette/1920/1080" priority fill alt="Background" class="object-cover w-full h-full opacity-20 scale-105">
        <!-- Gradient Overlay for Readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-[#020617] z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] z-10"></div>
      </div>
      
      <!-- Architectural Grid Overlay -->
      <div class="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <!-- Main Content -->
      <div class="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <!-- Trust Badge -->
        <div class="mb-8 animate-slide-up">
           <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 transition-colors cursor-default">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span class="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase font-bold">Accepting New Clients</span>
           </div>
        </div>

        <!-- Headline & Graph Container -->
        <div class="w-full max-w-5xl flex flex-col items-center animate-slide-up delay-100 relative">
          <div class="border-2 border-slate-600/70 py-4 px-8">
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none drop-shadow-lg">
               WE ARCHITECT
            </h1>
          </div>
          
          <!-- Graph visualization -->
          <div class="w-full mt-10 relative h-40">
              <!-- Gradient Bar -->
              <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
              
              <!-- ROI Tag -->
              <div class="absolute top-[calc(50%-32px)] right-4 flex items-center gap-3 p-3 pr-5 bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl border-l-4 border-l-green-500">
                  <div class="p-1.5 bg-green-500/20 rounded-lg">
                      <svg class="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                      <span class="text-xs text-slate-400 uppercase tracking-wider font-bold block">Client ROI</span>
                      <span class="text-3xl font-bold text-white tracking-tighter">+450%</span>
                  </div>
              </div>

              <!-- Social Proof Avatars -->
              <div class="absolute bottom-4 left-4 flex items-center gap-4 p-3 pr-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <div class="flex -space-x-3">
                    <img src="https://picsum.photos/seed/client_avatar1/100/100" class="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" alt="Client 1">
                    <img src="https://picsum.photos/seed/client_avatar2/100/100" class="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" alt="Client 2">
                    <div class="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-xs font-bold text-white">2k+</div>
                </div>
                <div class="text-left">
                  <span class="block text-white font-semibold text-sm">BondScckel</span>
                  <span class="block text-slate-400 text-xs">Glidy</span>
                </div>
              </div>
          </div>

          <h2 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/10 leading-none mt-2">
              DOMINANCE
          </h2>
        </div>

      </div>
      
      <!-- Seamless Bottom Fade -->
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
    </section>

    <!-- Services Preview (Holographic Cards) -->
    <section class="py-32 relative z-10 bg-[#0B1120] overflow-hidden">
      <!-- Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 animate-slide-up delay-100">
          <div>
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our <span class="text-gradient">Arsenal</span></h2>
            <p class="text-slate-400 max-w-lg text-lg">Tools and strategies designed to disrupt your market.</p>
          </div>
          <a routerLink="/services" class="hidden md:flex items-center text-cyan-400 hover:text-white transition-colors font-mono tracking-widest text-sm uppercase group">
            All Services 
            <span class="ml-2 w-8 h-[1px] bg-cyan-400 group-hover:w-12 transition-all"></span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 hover:to-purple-500/50 transition-all duration-500 cursor-pointer" routerLink="/services">
            <div class="h-full bg-[#111827] rounded-xl p-8 relative overflow-hidden">
               <!-- Icon Glow -->
               <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
               
               <div class="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300 text-cyan-400">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               </div>
               <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Web Development</h3>
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">Custom WordPress & Shopify architectures built for speed and conversion.</p>
               <div class="w-8 h-1 bg-cyan-800 group-hover:bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-500 cursor-pointer" routerLink="/services">
            <div class="h-full bg-[#111827] rounded-xl p-8 relative overflow-hidden">
               <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
               
               <div class="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-8 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 text-purple-400">
                 <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
               </div>
               <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Social Advertising</h3>
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">Dominating feeds with high-ROI campaigns on TikTok, Meta & Google.</p>
               <div class="w-8 h-1 bg-purple-800 group-hover:bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-pink-500/50 hover:to-orange-500/50 transition-all duration-500 cursor-pointer" routerLink="/services">
             <div class="h-full bg-[#111827] rounded-xl p-8 relative overflow-hidden">
               <div class="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>

               <div class="w-14 h-14 bg-pink-500/10 rounded-lg flex items-center justify-center mb-8 border border-pink-500/20 group-hover:border-pink-500/50 group-hover:scale-110 transition-all duration-300 text-pink-400">
                <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               </div>
               <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">Creative Design</h3>
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">Visual identities that stick. From branding to 3D motion graphics.</p>
               <div class="w-8 h-1 bg-pink-800 group-hover:bg-pink-400 transition-all duration-300 group-hover:w-full"></div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-[#0f172a] border-y border-white/5 relative">
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div class="relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-2">Client Love</h2>
          <p class="text-slate-500">Trusted by market leaders globally.</p>
        </div>
        <app-testimonials />
      </div>
    </section>

    <!-- Portfolio Preview (Cinematic) -->
    <section class="py-32 bg-[#020617] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-slide-up">
           <div>
             <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">Selected <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Work</span></h2>
             <p class="text-slate-400 text-lg">Case studies that define our capabilities.</p>
           </div>
           <a routerLink="/portfolio" class="hidden md:flex px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all font-semibold items-center">
             View All Projects <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
           </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <!-- Project 1 -->
           <div class="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/tiktok_ads_real/800/1000" width="800" height="1000" alt="TikTok Ads Manager Dashboard" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
             
             <div class="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <span class="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2 block">Video Marketing</span>
               <h3 class="text-2xl font-bold text-white mb-4">Viral TikTok Campaign</h3>
               <div class="h-[1px] w-full bg-white/20 group-hover:bg-cyan-400 transition-colors"></div>
             </div>
           </div>
           <!-- Project 2 -->
           <div class="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/shopify_dev_real/800/1000" width="800" height="1000" alt="Shopify Store Interface Design" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
             
             <div class="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <span class="text-green-400 font-mono text-xs tracking-widest uppercase mb-2 block">Development</span>
               <h3 class="text-2xl font-bold text-white mb-4">Luxe E-Commerce</h3>
               <div class="h-[1px] w-full bg-white/20 group-hover:bg-green-400 transition-colors"></div>
             </div>
           </div>
           <!-- Project 3 -->
           <div class="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer" routerLink="/portfolio">
             <img ngSrc="https://picsum.photos/seed/digital_art_real/800/1000" width="800" height="1000" alt="Digital Art Creation" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">
             <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
             
             <div class="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <span class="text-pink-400 font-mono text-xs tracking-widest uppercase mb-2 block">Illustration</span>
               <h3 class="text-2xl font-bold text-white mb-4">Neo-Tokyo Brand</h3>
               <div class="h-[1px] w-full bg-white/20 group-hover:bg-pink-400 transition-colors"></div>
             </div>
           </div>
        </div>
        
        <div class="mt-8 text-center md:hidden">
          <a routerLink="/portfolio" class="inline-block px-8 py-3 border border-white/20 rounded-full text-white font-bold">View Portfolio</a>
        </div>
      </div>
    </section>

    <!-- Warp Speed CTA -->
    <section class="py-40 relative overflow-hidden bg-slate-900 flex items-center justify-center">
       <!-- Warp Effect Background -->
       <div class="absolute inset-0 opacity-30">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-[#020617] to-[#020617]"></div>
          <div class="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-[spin_20s_linear_infinite] opacity-30" style="background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(6,182,212,0.1) 60deg, transparent 120deg, rgba(139,92,246,0.1) 180deg, transparent 360deg);"></div>
       </div>

       <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
         <h2 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">READY TO <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SCALE?</span></h2>
         <p class="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">Stop playing safe. Join the brands that are dominating their niche with Trendio.</p>
         
         <a routerLink="/contact" class="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-slate-900 font-bold text-xl rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)]">
           <span class="relative z-10 flex items-center">
             Start Your Project 
             <svg class="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
           </span>
         </a>
       </div>
    </section>

    <!-- Style for Text Stroke and Floating Animation -->
    <style>
      .text-stroke-white {
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
    </style>
  `
})
export class HomeComponent {}
