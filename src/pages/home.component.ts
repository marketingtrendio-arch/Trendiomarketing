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
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-white pt-20 px-4">
      
      <div class="absolute inset-0 z-0">
        <!-- Layer 1: Animated Background -->
        <img ngSrc="https://picsum.photos/seed/tech_blueprint_dark/1920/1080" priority fill alt="Abstract tech blueprint background" class="object-cover opacity-10 blur-sm scale-110">
        
        <!-- Grid overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,208,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,208,255,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)]"></div>
        <!-- Glowing Blobs -->
        <div class="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-[spin_20s_linear_infinite_reverse]"></div>
        <div class="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-[spin_20s_linear_infinite]"></div>
      </div>

      <!-- Layer 2: Main Content -->
      <div class="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        <!-- HUD Elements (Decorative) -->
        <div class="absolute -top-16 -left-16 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-3xl opacity-50 animate-fade-in pointer-events-none"></div>
        <div class="absolute -bottom-16 -right-16 w-32 h-32 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl opacity-50 animate-fade-in pointer-events-none"></div>

        <!-- Central Console -->
        <div class="w-full relative animate-fade-in delay-100">

          <!-- Main Title -->
          <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6 animate-slide-up delay-200">
            Engineering<br>Digital <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Momentum</span>
          </h1>

          <p class="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up delay-300">
            We architect high-performance digital ecosystems that drive growth, captivate audiences, and establish market dominance.
          </p>

          <!-- CTA -->
          <div class="mt-12 animate-slide-up delay-400">
            <a routerLink="/contact" class="group relative inline-block text-lg font-bold">
              <span class="relative z-10 block px-10 py-4 text-white border-2 border-white/20 rounded-full bg-[#020617]/50 backdrop-blur-sm transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                Start Your Ascent
              </span>
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
            </a>
          </div>

        </div>

        <!-- Satellite Stat Panels -->
        <div class="relative w-full max-w-4xl mx-auto mt-20 animate-slide-up delay-500">
          
          <!-- Connecting Lines (Decorative) -->
          <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden md:block pointer-events-none"></div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Stat 1 -->
            <div class="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/20">
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <p class="text-sm font-medium leading-6 text-slate-400">Avg. Client ROI</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">+450%</span>
              </p>
            </div>

            <!-- Stat 2 -->
            <div class="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-800/20">
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <p class="text-sm font-medium leading-6 text-slate-400">Projects Launched</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">200+</span>
                <span class="text-sm text-slate-400">Globally</span>
              </p>
            </div>

            <!-- Stat 3 -->
            <div class="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/20">
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <p class="text-sm font-medium leading-6 text-slate-400">Client Retention</p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white">98%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Seamless Bottom Fade -->
      <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-10"></div>
    </section>

    <!-- Services Preview (Holographic Cards) -->
    <section class="py-32 relative z-10 bg-[#0B1120] overflow-hidden">
      <!-- Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 animate-slide-up delay-100">
          <div>
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our <span class="text-gradient">Arsenal</span></h2>
            <p class="text-slate-400 max-w-lg text-lg">A suite of capabilities engineered to disrupt your market.</p>
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
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">High-performance web architectures engineered for speed, scale, and conversion.</p>
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
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">Precision-targeted, high-ROI campaigns that dominate feeds on TikTok, Meta & Google.</p>
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
               <p class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300">Visual identities that captivate. From iconic branding to immersive 3D motion graphics.</p>
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

    <!-- Warp Speed CTA -->
    <section class="py-40 relative overflow-hidden bg-slate-900 flex items-center justify-center">
       <!-- Warp Effect Background -->
       <div class="absolute inset-0 opacity-30">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-[#020617] to-[#020617]"></div>
          <div class="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-[spin_20s_linear_infinite] opacity-30" style="background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(6,182,212,0.1) 60deg, transparent 120deg, rgba(139,92,246,0.1) 180deg, transparent 360deg);"></div>
       </div>

       <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
         <h2 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">READY TO <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SCALE?</span></h2>
         <p class="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">Your market is waiting. We provide the blueprint and the firepower to dominate it.</p>
         
         <a routerLink="/contact" class="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-slate-900 font-bold text-xl rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)]">
           <span class="relative z-10 flex items-center">
             Start Your Project 
             <svg class="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
           </span>
         </a>
       </div>
    </section>
  `
})
export class HomeComponent {}