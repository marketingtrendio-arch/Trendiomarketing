import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="py-12 relative overflow-hidden">
      <!-- Gradient Fade Edges -->
      <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div class="flex animate-marquee gap-8 w-max hover:[animation-play-state:paused]">
        <!-- Original Set -->
        @for (review of reviews; track review.name) {
          <div class="w-[400px] flex-shrink-0 p-8 glass-panel rounded-2xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-slate-800/30">
             <div class="flex items-center mb-6">
               <div class="h-14 w-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/20">
                 <img [ngSrc]="review.image" width="100" height="100" [alt]="review.name" class="object-cover w-full h-full">
               </div>
               <div class="ml-4">
                 <h4 class="text-slate-900 dark:text-white font-bold text-lg">{{ review.name }}</h4>
                 <p class="text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">{{ review.role }}</p>
               </div>
             </div>
             <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed italic mb-4">"{{ review.text }}"</p>
             <div class="flex text-yellow-500 dark:text-yellow-400 gap-1">
               @for (star of [1,2,3,4,5]; track star) {
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               }
             </div>
          </div>
        }
        <!-- Duplicate Set for Seamless Loop -->
        @for (review of reviews; track review.name + '_dup') {
          <div class="w-[400px] flex-shrink-0 p-8 glass-panel rounded-2xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-slate-800/30">
             <div class="flex items-center mb-6">
               <div class="h-14 w-14 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/20">
                 <img [ngSrc]="review.image" width="100" height="100" [alt]="review.name" class="object-cover w-full h-full">
               </div>
               <div class="ml-4">
                 <h4 class="text-slate-900 dark:text-white font-bold text-lg">{{ review.name }}</h4>
                 <p class="text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">{{ review.role }}</p>
               </div>
             </div>
             <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed italic mb-4">"{{ review.text }}"</p>
             <div class="flex text-yellow-500 dark:text-yellow-400 gap-1">
               @for (star of [1,2,3,4,5]; track star) {
                 <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               }
             </div>
          </div>
        }
      </div>
    </div>
  `
})
export class TestimonialsComponent {
  reviews = [
    { 
      name: 'Sarah Jenkins', 
      role: 'CEO, TechFlow', 
      text: 'TrendioMarketing completely revamped our social strategy. Our engagement is up 200% and leads are pouring in.',
      image: 'https://picsum.photos/seed/sarah_real_headshot/200/200' 
    },
    { 
      name: 'Michael Chen', 
      role: 'Founder, StartUp X', 
      text: 'The web development team is world-class. Fast, responsive, and incredibly modern designs that actually convert.',
      image: 'https://picsum.photos/seed/michael_real_headshot/200/200' 
    },
    { 
      name: 'Jessica Doe', 
      role: 'Marketing Dir, FashionNova', 
      text: 'Their ad campaigns on TikTok and Instagram are pure genius. ROI was instant and the creative was spot on.',
      image: 'https://picsum.photos/seed/jessica_real_headshot/200/200' 
    },
    { 
      name: 'David Smith', 
      role: 'Owner, Smith Realty', 
      text: 'Professional, edgy, and effective. Best digital agency we have worked with in the last decade.',
      image: 'https://picsum.photos/seed/david_real_headshot/200/200' 
    },
    { 
      name: 'Emily White', 
      role: 'Blogger', 
      text: 'Love the graphics design work! My brand identity looks so fresh now. The team really listened to my vision.',
      image: 'https://picsum.photos/seed/emily_real_headshot/200/200' 
    },
    { 
      name: 'James Wilson', 
      role: 'eCom Manager', 
      text: 'Shopify sales exploded after their Google Ads campaign optimization. Highly recommended!',
      image: 'https://picsum.photos/seed/james_real_headshot/200/200' 
    }
  ];
}