import { Component, signal, computed, inject, OnDestroy } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  host: {
    '(document:keydown.escape)': 'closeProject()'
  },
  template: `
    <div class="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] relative overflow-hidden pt-28 pb-24 transition-colors duration-500">
       <!-- Dynamic Background Mesh -->
       <div class="absolute inset-0 z-0 pointer-events-none">
          <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
          <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-300/30 dark:bg-cyan-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
          <div class="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
       </div>

       <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Header -->
          <div class="text-center mb-16 space-y-4">
            <h2 class="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">Our Work</h2>
            <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
              Selected <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-600">Projects</span>
            </h1>
            <p class="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Digital experiences that blend aesthetics with performance. Click on a project to view the case study.
            </p>
          </div>

          <!-- Filter Tabs -->
          <div class="flex flex-wrap justify-center gap-3 mb-16">
            @for (cat of categories; track cat) {
              <button 
                (click)="setFilter(cat)"
                class="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md"
                [ngClass]="activeFilter() === cat ? 
                  'bg-white dark:bg-white/10 border-cyan-500/50 text-cyan-700 dark:text-white shadow-lg shadow-cyan-500/10 dark:shadow-[0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-500/20' : 
                  'bg-white/50 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-400 hover:bg-white dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'"
              >
                {{ cat }}
              </button>
            }
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (project of filteredProjects(); track project.id) {
              <!-- Project Card (Click Trigger) -->
              <div (click)="openProject(project)" class="group relative rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-cyan-900/5 dark:hover:shadow-cyan-900/20 hover:-translate-y-2 flex flex-col h-full animate-fadeIn cursor-pointer">
                
                <!-- Image Container -->
                <div class="relative h-72 w-full overflow-hidden">
                   <div class="absolute inset-0 bg-slate-100 dark:bg-slate-900 animate-pulse z-0"></div>
                   <img [ngSrc]="project.image" fill priority class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 z-10" [alt]="project.title">
                   
                   <!-- Overlay Gradient -->
                   <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-20 dark:opacity-60 z-20 group-hover:opacity-40 dark:group-hover:opacity-80 transition-opacity"></div>
                   
                   <!-- Floating Category Badge -->
                   <div class="absolute top-4 left-4 z-30">
                     <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/50 backdrop-blur-md border border-white/20 text-slate-800 dark:text-white group-hover:bg-cyan-500/90 group-hover:border-cyan-400 group-hover:text-white transition-colors duration-300 shadow-sm">
                       {{ project.category }}
                     </span>
                   </div>

                   <!-- View Case Study Button (Revealed on Hover) -->
                   <div class="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <div class="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white transition-colors shadow-xl">
                        View Case Study
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </div>
                   </div>
                </div>

                <!-- Content -->
                <div class="p-8 flex-1 flex flex-col relative z-20">
                   <!-- Title & Icon -->
                   <div class="flex justify-between items-start mb-4">
                     <h3 class="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{{ project.title }}</h3>
                     <div class="text-slate-400 dark:text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" [innerHTML]="project.iconSvg"></div>
                   </div>

                   <!-- Description -->
                   <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 border-l-2 border-slate-100 dark:border-white/5 pl-4 group-hover:border-cyan-500/30 transition-colors duration-300">
                     {{ project.description }}
                   </p>

                   <!-- Footer / Stats -->
                   <div class="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto">
                     <div>
                       <p class="text-[10px] uppercase text-slate-400 dark:text-gray-500 font-bold tracking-wider mb-0.5">Result</p>
                       <p class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">{{ project.result }}</p>
                     </div>
                     <span class="text-xs font-medium text-slate-500 dark:text-gray-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 flex items-center">
                       Read Story <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                     </span>
                   </div>
                </div>
              </div>
            }
          </div>

          <!-- Bottom CTA -->
          <div class="mt-24 text-center">
            <div class="inline-flex items-center p-1 rounded-full bg-white/70 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-xl dark:shadow-none">
              <span class="px-6 py-3 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-medium text-sm">Have a project in mind?</span>
              <a href="/contact" class="px-8 py-3 rounded-full bg-gradient-primary text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all ml-2">Let's Talk</a>
            </div>
          </div>
       </div>

       <!-- Modal Overlay -->
       @if (selectedProject()) {
        <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-slate-900/60 dark:bg-slate-900/90 backdrop-blur-md transition-opacity animate-fadeIn" (click)="closeProject()"></div>

          <!-- Modal Content -->
          <div class="relative w-full max-w-6xl bg-white dark:bg-[#0f172a] rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] animate-zoomIn">
              
              <!-- Close Button -->
              <button (click)="closeProject()" class="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors border border-white/10">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <!-- Image Side -->
              <div class="w-full lg:w-1/2 h-64 lg:h-auto relative shrink-0">
                 <img [ngSrc]="selectedProject()!.image" fill class="object-cover" [alt]="selectedProject()!.title">
                 <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white dark:from-[#0f172a] dark:to-[#0f172a] opacity-90"></div>
                 
                 <!-- Modal Title Overlay (Mobile) -->
                 <div class="absolute bottom-4 left-4 lg:hidden">
                    <span class="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 block">{{ selectedProject()!.category }}</span>
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">{{ selectedProject()!.title }}</h2>
                 </div>
              </div>

              <!-- Content Side -->
              <div class="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-white dark:bg-[#0f172a] relative">
                 <!-- Desktop Title -->
                 <div class="hidden lg:block mb-8">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                        {{ selectedProject()!.category }}
                      </span>
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2">{{ selectedProject()!.title }}</h2>
                 </div>

                 <!-- Stats Grid -->
                 <div class="grid grid-cols-2 gap-4 mb-10">
                    <div class="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <p class="text-slate-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">Result</p>
                      <p class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">{{ selectedProject()!.result }}</p>
                    </div>
                    <div class="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <p class="text-slate-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">Impact</p>
                      <p class="text-xl font-bold text-slate-900 dark:text-white">Market Leader</p>
                    </div>
                 </div>

                 <!-- Text Sections -->
                 <div class="space-y-8 text-slate-600 dark:text-gray-300 leading-relaxed">
                    <div>
                      <h3 class="text-slate-900 dark:text-white font-bold text-lg mb-3 flex items-center">
                        <span class="w-1 h-6 bg-red-500 rounded-full mr-3"></span>
                        The Challenge
                      </h3>
                      <p>{{ selectedProject()!.challenge }}</p>
                    </div>
                    <div>
                      <h3 class="text-slate-900 dark:text-white font-bold text-lg mb-3 flex items-center">
                        <span class="w-1 h-6 bg-green-500 rounded-full mr-3"></span>
                        The Solution
                      </h3>
                      <p>{{ selectedProject()!.solution }}</p>
                    </div>
                 </div>
              </div>
          </div>
        </div>
       }
    </div>
    <style>
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 10s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
      .animate-zoomIn {
        animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes zoomIn {
        from { opacity: 0; transform: scale(0.95) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      /* Custom Scrollbar for Modal */
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
      }
      .dark .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    </style>
  `
})
export class PortfolioComponent implements OnDestroy {
  private sanitizer = inject(DomSanitizer);
  categories = ['All', 'Web Dev', 'Marketing', 'Branding', 'Digital Art'];
  activeFilter = signal('All');
  selectedProject = signal<any>(null);

  private rawProjects = [
    { 
      id: 1, 
      title: 'TechHub Portal', 
      category: 'Web Dev',
      description: 'A scalable, headless WordPress architecture built for a high-traffic tech news portal. Optimized for Core Web Vitals and ad revenue.', 
      challenge: 'The client struggled with slow load times and frequent downtime during traffic spikes. Their legacy CMS was bloated, causing a 40% bounce rate on mobile devices and hurting their ad revenue.',
      solution: 'We re-engineered the platform using a Headless WordPress architecture with a Next.js frontend. This decoupled approach allowed for static site generation (SSG) and global CDN caching, resulting in instant page loads.',
      result: '+140% Page Speed',
      image: 'https://picsum.photos/seed/techhub_project/800/600', 
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
      link: 'https://techcrunch.com'
    },
    { 
      id: 2, 
      title: 'Velour Beauty', 
      category: 'Web Dev',
      description: 'Custom Shopify Plus theme with integrated subscription modeling and AI-driven product recommendations for a luxury brand.', 
      challenge: 'Velour Beauty needed to increase their Average Order Value (AOV) and reduce cart abandonment. Their previous generic theme didn’t reflect the premium nature of their products.',
      solution: 'We designed a bespoke Shopify Plus theme featuring immersive video backgrounds and an AI-powered "Complete the Look" recommendation engine. We also implemented a seamless subscription flow.',
      result: '$2.4M Revenue/Yr', 
      image: 'https://picsum.photos/seed/velour_beauty_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>',
      link: 'https://www.glossier.com'
    },
    { 
      id: 3, 
      title: 'Neon Creative', 
      category: 'Branding',
      description: 'Complete rebranding package including logo design, typography system, and motion graphics for a gaming startup.', 
      challenge: 'The startup was entering a saturated market and their existing identity felt dated and corporate. They needed a visual language that spoke to Gen Z gamers and streamers.',
      solution: 'We created a high-energy brand identity using neon color palettes and glitch-art inspired typography. The deliverables included a motion design system for their Twitch overlays.',
      result: 'Award Winning', 
      image: 'https://picsum.photos/seed/neon_creative_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
      link: 'https://www.behance.net'
    },
    { 
      id: 4, 
      title: 'CyberPunk NFT', 
      category: 'Digital Art',
      description: 'A collection of 10,000 unique 3D generated characters. Sold out in 14 minutes due to high-fidelity artistic detail.', 
      challenge: 'To stand out in the NFT craze, the art quality had to be cinema-grade 3D, not just 2D doodles. The generation script needed to handle complex layer compatibility without clipping.',
      solution: 'We utilized Blender and Python scripting to generate 10k unique traits with complex lighting bakes. The launch campaign was synchronized with a Discord community build.',
      result: 'Sold Out (14m)', 
      image: 'https://picsum.photos/seed/cyberpunk_nft_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
      link: 'https://opensea.io'
    },
    { 
      id: 5, 
      title: 'Social Boost', 
      category: 'Marketing',
      description: 'High-frequency retargeting campaigns on Facebook & Instagram for a SaaS productivity tool. Drastically reduced CPA.', 
      challenge: 'The SaaS company had high traffic but low conversion. Users were visiting the pricing page and leaving. CPA (Cost Per Acquisition) was spiraling out of control.',
      solution: 'We implemented a multi-tiered retargeting strategy. Users who visited pricing got a "14-day free trial" offer video ad, while blog readers got a "Download Ebook" lead magnet.',
      result: '4.2x ROAS', 
      image: 'https://picsum.photos/seed/social_boost_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      link: 'https://sproutsocial.com'
    },
    { 
      id: 6, 
      title: 'Search Alpha', 
      category: 'Marketing',
      description: 'Keyword domination strategy for a legal firm, capturing 85% of local high-intent search traffic via Google Ads.', 
      challenge: 'A local law firm was getting outbid by national competitors. Their cost per click was high, and lead quality was poor.',
      solution: 'We restructured their Google Ads account with Single Keyword Ad Groups (SKAGs) and negative keyword lists. We also optimized landing pages for local SEO relevance.',
      result: '-40% CPL', 
      image: 'https://picsum.photos/seed/search_alpha_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
      link: 'https://ads.google.com'
    },
    { 
      id: 7, 
      title: 'Viral Video', 
      category: 'Marketing',
      description: 'Cinematic storytelling ad sequence. Pre-roll ads that achieved a 45% view-through rate on YouTube.', 
      challenge: 'The brand needed to launch a new sneaker line but had zero brand awareness. They needed a video that people wouldn\'t skip immediately.',
      solution: 'We produced a high-octane 30-second spot featuring parkour athletes. The hook was placed in the first 3 seconds to prevent skipping on YouTube.',
      result: '1M+ Views', 
      image: 'https://picsum.photos/seed/viral_video_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
      link: 'https://www.youtube.com'
    },
    { 
      id: 8, 
      title: 'GenZ Wave', 
      category: 'Marketing',
      description: 'Influencer-led UGC campaign on TikTok. Authentic, raw, and incredibly viral content strategy.', 
      challenge: 'A beverage brand was struggling to connect with audiences under 25. Traditional polished ads were being ignored.',
      solution: 'We partnered with 50 micro-influencers to create "User Generated Content" style videos using a custom branded sound. The challenge went viral organically.',
      result: '200k Users', 
      image: 'https://picsum.photos/seed/genz_wave_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>',
      link: 'https://www.tiktok.com'
    },
    { 
      id: 9, 
      title: 'Snap Filter', 
      category: 'Digital Art',
      description: 'Augmented Reality (AR) filter designed for a beverage brand launch, driving massive brand interaction.', 
      challenge: 'The brand wanted a fun way for users to share their new drink launch on Stories without it feeling like a blatant ad.',
      solution: 'We designed a gamified AR filter where users had to catch falling fruit with their mouth. It was fun, shareable, and subtly branded.',
      result: '50k Shares', 
      image: 'https://picsum.photos/seed/snap_filter_project/800/600',
      iconSvg: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>',
      link: 'https://www.snapchat.com'
    }
  ];

  projects = this.rawProjects.map(p => ({
    ...p,
    iconSvg: this.sanitizer.bypassSecurityTrustHtml(p.iconSvg)
  }));

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });

  setFilter(category: string) {
    this.activeFilter.set(category);
  }

  openProject(project: any) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}