
import { Component } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage, NgTemplateOutlet],
  template: `
    <div class="py-24 relative overflow-hidden bg-[#020617] border-y border-white/5">
      <!-- Ambient Background Glows -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <span class="text-cyan-500 font-mono text-xs tracking-[0.2em] uppercase mb-3 block animate-pulse-slow font-bold">Client Success Stories</span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Trusted by <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Industry Leaders</span></h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          We don't just deliver services; we build legacies. See what Founders, CTOs, and Creators are saying about our impact.
        </p>
      </div>

      <!-- Marquee Container -->
      <div class="relative flex flex-col gap-8 mask-linear-fade">
        
        <!-- Row 1: Moving Left (Cyan Theme) -->
        <div class="flex animate-marquee gap-6 w-max hover:[animation-play-state:paused]">
           <!-- Original Set -->
           @for (review of firstRow; track review.name) {
             <ng-container [ngTemplateOutlet]="cardTemplate" [ngTemplateOutletContext]="{ $implicit: review, theme: 'cyan' }"></ng-container>
           }
           <!-- Duplicate Set -->
           @for (review of firstRow; track review.name + '_dup') {
             <ng-container [ngTemplateOutlet]="cardTemplate" [ngTemplateOutletContext]="{ $implicit: review, theme: 'cyan' }"></ng-container>
           }
        </div>

        <!-- Row 2: Moving Right (Purple Theme) -->
        <div class="flex animate-marquee-reverse gap-6 w-max hover:[animation-play-state:paused]">
           <!-- Original Set -->
           @for (review of secondRow; track review.name) {
             <ng-container [ngTemplateOutlet]="cardTemplate" [ngTemplateOutletContext]="{ $implicit: review, theme: 'purple' }"></ng-container>
           }
           <!-- Duplicate Set -->
           @for (review of secondRow; track review.name + '_dup') {
             <ng-container [ngTemplateOutlet]="cardTemplate" [ngTemplateOutletContext]="{ $implicit: review, theme: 'purple' }"></ng-container>
           }
        </div>

      </div>
    </div>

    <!-- Reusable Card Template -->
    <ng-template #cardTemplate let-review let-theme="theme">
      <div class="w-[400px] md:w-[450px] relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/0 transition-all duration-500"
           [class.hover:from-cyan-500]="theme === 'cyan'"
           [class.hover:to-cyan-500]="theme === 'cyan'"
           [class.hover:from-purple-500]="theme === 'purple'"
           [class.hover:to-purple-500]="theme === 'purple'">
        
        <div class="h-full bg-[#0f172a]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5 relative overflow-hidden group-hover:bg-[#131c31] transition-colors duration-300">
          
           <!-- Subtle Glow behind card on hover -->
           <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                [class.bg-cyan-500]="theme === 'cyan'"
                [class.bg-purple-500]="theme === 'purple'"></div>

           <!-- Quote Icon -->
           <div class="absolute top-4 right-6 text-7xl font-serif text-white/5 transition-colors duration-300 select-none"
                [class.group-hover:text-cyan-500/10]="theme === 'cyan'"
                [class.group-hover:text-purple-500/10]="theme === 'purple'">"</div>
           
           <!-- Header -->
           <div class="flex items-center gap-4 mb-6 relative z-10">
             <div class="relative">
               <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 transition-colors duration-300"
                    [class.group-hover:border-cyan-400]="theme === 'cyan'"
                    [class.group-hover:border-purple-400]="theme === 'purple'">
                 <img [ngSrc]="review.image" width="100" height="100" [alt]="review.name" class="object-cover w-full h-full">
               </div>
               <!-- Verified Badge -->
               <div class="absolute -bottom-1 -right-1 text-white p-[2px] rounded-full border-2 border-[#0f172a]"
                    [class.bg-cyan-500]="theme === 'cyan'"
                    [class.bg-purple-500]="theme === 'purple'">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
               </div>
             </div>
             <div>
               <h4 class="text-white font-bold text-lg leading-tight">{{ review.name }}</h4>
               <p class="text-xs uppercase tracking-wider font-bold mt-1 transition-colors duration-300"
                  [class.text-cyan-400]="theme === 'cyan'"
                  [class.text-purple-400]="theme === 'purple'">{{ review.role }}</p>
             </div>
           </div>
           
           <!-- Text -->
           <p class="text-slate-300 text-[15px] leading-relaxed relative z-10 font-light italic">
             "{{ review.text }}"
           </p>

           <!-- Stars -->
           <div class="mt-6 flex items-center gap-1 relative z-10">
              @for (i of [1,2,3,4,5]; track i) {
                <svg class="w-4 h-4 text-yellow-500 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              }
           </div>
        </div>
      </div>
    </ng-template>

    <style>
      .mask-linear-fade {
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
      
      .animate-marquee-reverse {
        animation: marqueeReverse 60s linear infinite;
      }
      
      /* Make the normal marquee slightly slower for readability */
      .animate-marquee {
        animation: marquee 60s linear infinite;
      }

      @keyframes marqueeReverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    </style>
  `
})
export class TestimonialsComponent {
  // 14 Total Reviews split into two rows
  
  firstRow = [
    { 
      name: 'Sarah Jenkins', 
      role: 'CEO, TechFlow', 
      text: 'TrendioMarketing completely revamped our social strategy. Our engagement is up 200% and leads are pouring in. The ROI has been undeniable.',
      image: 'https://picsum.photos/seed/sarah_real_headshot/200/200' 
    },
    { 
      name: 'Michael Chen', 
      role: 'Founder, StartUp X', 
      text: 'The web development team is world-class. Fast, responsive, and incredibly modern designs that actually convert visitors into paying customers.',
      image: 'https://picsum.photos/seed/michael_real_headshot/200/200' 
    },
    { 
      name: 'Elena Rodriguez', 
      role: 'Bestselling Author', 
      text: 'My book launch campaign went viral thanks to their TikTok strategy. We hit the bestseller list in 48 hours. Absolute magic.',
      image: 'https://picsum.photos/seed/elena_headshot/200/200' 
    },
    { 
      name: 'David Smith', 
      role: 'Owner, Smith Realty', 
      text: 'Professional, edgy, and effective. Best digital agency we have worked with in the last decade. They dominate local SEO.',
      image: 'https://picsum.photos/seed/david_real_headshot/200/200' 
    },
    { 
      name: 'Sophie Miller', 
      role: 'Influencer (2M+)', 
      text: 'They understand the creator economy better than anyone. My brand partnerships have doubled in value since working with them.',
      image: 'https://picsum.photos/seed/sophie_influencer/200/200' 
    },
    { 
      name: 'James Wilson', 
      role: 'eCom Manager', 
      text: 'Shopify sales exploded after their Google Ads campaign optimization. Their data-driven approach is exactly what we needed.',
      image: 'https://picsum.photos/seed/james_real_headshot/200/200' 
    },
    { 
      name: 'Robert Fox', 
      role: 'CTO, FinTech Global', 
      text: 'Security, speed, and aesthetics. It is rare to find an agency that masters all three. Trendio delivered a flawless platform.',
      image: 'https://picsum.photos/seed/robert_cto/200/200' 
    }
  ];

  secondRow = [
    { 
      name: 'Jessica Doe', 
      role: 'Marketing Dir, FashionNova', 
      text: 'Their ad campaigns on TikTok and Instagram are pure genius. ROI was instant and the creative was spot on with our brand voice.',
      image: 'https://picsum.photos/seed/jessica_real_headshot/200/200' 
    },
    { 
      name: 'Amanda Low', 
      role: 'Creative Lead, ArtVibe', 
      text: 'The visual identity they built is iconic. From the logo to the motion graphics, everything screams quality and innovation.',
      image: 'https://picsum.photos/seed/amanda_creative/200/200' 
    },
    { 
      name: 'Marcus Johnson', 
      role: 'Owner, FitLife Gyms', 
      text: 'We are fully booked for the next 3 months. Their local lead generation strategy is aggressive and incredibly effective.',
      image: 'https://picsum.photos/seed/marcus_gym/200/200' 
    },
    { 
      name: 'Thomas Wright', 
      role: 'Director, Wright Logistics', 
      text: 'Transparency is key for us. Trendio provides clear reports, honest feedback, and real results. A true partner in growth.',
      image: 'https://picsum.photos/seed/thomas_logistics/200/200' 
    },
    { 
      name: 'Emily White', 
      role: 'Lifestyle Blogger', 
      text: 'Love the graphics design work! My brand identity looks so fresh now. The team really listened to my vision and elevated it.',
      image: 'https://picsum.photos/seed/emily_real_headshot/200/200' 
    },
    { 
      name: 'Daniel Kim', 
      role: 'VP Sales, SoftWarez', 
      text: 'Our B2B lead pipeline is overflowing. Their LinkedIn marketing strategy connected us with Fortune 500 decision makers.',
      image: 'https://picsum.photos/seed/daniel_sales/200/200' 
    },
    { 
      name: 'Olivia Grant', 
      role: 'Founder, EcoStyle', 
      text: 'Sustainable branding that actually sells. They helped us communicate our mission without sounding preachy. Sales are up 300%.',
      image: 'https://picsum.photos/seed/olivia_founder/200/200' 
    }
  ];
}
