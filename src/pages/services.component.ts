
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="pt-12 pb-24 min-h-screen transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 animate-slide-up">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Our <span class="text-gradient">Services</span></h1>
          <p class="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your unique business needs. From development to traffic generation, we cover the full spectrum.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title; let i = $index) {
            <div 
              class="glass-panel card-clean-light rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full animate-slide-up"
              [style.animation-delay]="(i * 100) + 'ms'"
            >
              <!-- Service Image -->
              <div class="h-48 relative w-full overflow-hidden">
                <img [ngSrc]="service.imageUrl" fill priority [alt]="service.imageAlt" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40"></div>
                <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/80 backdrop-blur flex items-center justify-center text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 shadow-lg">
                   <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" [innerHTML]="service.iconSvg"></svg>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 flex-grow flex flex-col relative bg-white dark:bg-transparent">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" [class]="service.gradientClass"></div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">{{ service.title }}</h3>
                <p class="text-slate-600 dark:text-gray-400 leading-relaxed text-sm flex-grow">{{ service.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {
  private sanitizer = inject(DomSanitizer);

  private rawServices = [
    {
      title: 'WordPress Development',
      description: 'Custom, high-performance WordPress sites built for speed, SEO, and ease of management. We build dashboards that empower your team.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
      gradientClass: 'from-blue-500 to-cyan-400',
      textClass: 'text-blue-400 hover:text-blue-300',
      imageUrl: 'https://picsum.photos/seed/wordpress_real/600/400',
      imageAlt: 'A realistic developer working on a WordPress dashboard, code editor on screen'
    },
    {
      title: 'Shopify Development',
      description: 'Turnkey e-commerce stores designed to convert visitors into loyal customers with beautiful product pages and seamless checkout.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />',
      gradientClass: 'from-green-500 to-emerald-400',
      textClass: 'text-green-400 hover:text-green-300',
      imageUrl: 'https://picsum.photos/seed/shopify_real/600/400',
      imageAlt: 'A realistic ecommerce designer working on a Shopify store interface'
    },
    {
      title: 'Graphics Design',
      description: 'Stunning visual assets including logos, banners, brochures, and brand guidelines created by world-class artists.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />',
      gradientClass: 'from-pink-500 to-rose-400',
      textClass: 'text-pink-400 hover:text-pink-300',
      imageUrl: 'https://picsum.photos/seed/graphic_design_real/600/400',
      imageAlt: 'A realistic graphic designer using a pen tablet, colorful design tools on screen'
    },
    {
      title: 'Digital Art & Illustration',
      description: 'Unique digital artwork to give your brand a distinct and creative edge. Vibrant, high-definition, and unforgettable.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
      gradientClass: 'from-purple-500 to-indigo-400',
      textClass: 'text-purple-400 hover:text-purple-300',
      imageUrl: 'https://picsum.photos/seed/digital_art_real/600/400',
      imageAlt: 'A digital artist creating vibrant artwork on a large tablet'
    },
    {
      title: 'Facebook Ads',
      description: 'Precision targeting to reach your ideal audience on the world\'s largest social platform using advanced analytics.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />',
      gradientClass: 'from-blue-600 to-blue-400',
      textClass: 'text-blue-500 hover:text-blue-400',
      imageUrl: 'https://picsum.photos/seed/facebook_ads_real/600/400',
      imageAlt: 'A realistic marketer analyzing social media ads analytics'
    },
    {
      title: 'Instagram Ads',
      description: 'Visually compelling ad campaigns that drive engagement and brand awareness for the modern mobile consumer.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />',
      gradientClass: 'from-pink-600 to-purple-500',
      textClass: 'text-pink-500 hover:text-pink-400',
      imageUrl: 'https://picsum.photos/seed/instagram_ads_real/600/400',
      imageAlt: 'A realistic marketer analyzing Instagram insights dashboard'
    },
    {
      title: 'Google Ads (PPC)',
      description: 'Capture high-intent search traffic and get immediate results with optimized PPC campaigns and keyword strategy.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',
      gradientClass: 'from-yellow-500 to-orange-400',
      textClass: 'text-yellow-500 hover:text-yellow-400',
      imageUrl: 'https://picsum.photos/seed/google_ads_real/600/400',
      imageAlt: 'A professional marketer working on Google Ads dashboard'
    },
    {
      title: 'YouTube Ads',
      description: 'Video advertising that tells your story and captures attention in seconds. High-quality production and targeting.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      gradientClass: 'from-red-600 to-red-400',
      textClass: 'text-red-500 hover:text-red-400',
      imageUrl: 'https://picsum.photos/seed/youtube_ads_real/600/400',
      imageAlt: 'A realistic editor analyzing YouTube ads performance'
    },
    {
      title: 'TikTok Ads',
      description: 'Viral-style content marketing to reach Gen Z and younger demographics with trendy, authentic video content.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />',
      gradientClass: 'from-cyan-400 to-teal-400',
      textClass: 'text-cyan-400 hover:text-cyan-300',
      imageUrl: 'https://picsum.photos/seed/tiktok_ads_real/600/400',
      imageAlt: 'A digital marketer working on TikTok Ads Manager'
    },
    {
      title: 'Snapchat Ads',
      description: 'Immersive vertical video ads that drive authentic connection using filters, stories, and discovery ads.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />',
      gradientClass: 'from-yellow-400 to-yellow-300',
      textClass: 'text-yellow-400 hover:text-yellow-300',
      imageUrl: 'https://picsum.photos/seed/snapchat_ads_real/600/400',
      imageAlt: 'A marketer analyzing Snapchat Ads data, yellow accent lights'
    },
    {
      title: 'Pinterest Ads',
      description: 'Inspiration-based advertising perfect for e-commerce and lifestyle brands looking to reach planners and shoppers.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />',
      gradientClass: 'from-red-500 to-rose-500',
      textClass: 'text-red-400 hover:text-red-300',
      imageUrl: 'https://picsum.photos/seed/pinterest_ads_real/600/400',
      imageAlt: 'A professional Pinterest marketing workspace, pin boards on screen'
    }
  ];

  services = this.rawServices.map(s => ({
    ...s,
    iconSvg: this.sanitizer.bypassSecurityTrustHtml(s.iconSvg)
  }));
}