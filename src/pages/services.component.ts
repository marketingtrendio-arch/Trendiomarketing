import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-white dark:bg-slate-900 pt-12 pb-24 min-h-screen transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 animate-slide-up">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Our <span class="text-gradient">Services</span></h1>
          <p class="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated suite of high-performance digital solutions. We architect and execute the full spectrum of strategies required to win in today's market.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title; let i = $index) {
            <div 
              class="glass-panel card-clean-light rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full animate-slide-up group"
              [style.animation-delay]="(i * 100) + 'ms'"
            >
              <!-- Service Icon -->
              <div class="h-48 relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br p-4" [class]="service.gradientClass">
                <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
                <div class="relative w-24 h-24 text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <svg class="w-full h-full drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" [innerHTML]="service.iconSvg"></svg>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 flex-grow flex flex-col bg-white dark:bg-slate-850">
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
      description: 'High-performance WordPress architectures engineered for speed, scale, and conversion. We deliver headless and traditional builds optimized for Core Web Vitals.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
      gradientClass: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Shopify Development',
      description: 'Elite Shopify & Shopify Plus experiences designed for maximum conversion. We craft bespoke themes, optimize checkout flows, and integrate systems that drive revenue.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />',
      gradientClass: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Graphics Design',
      description: 'Captivating visual identities and creative assets that command attention. Our services span from foundational branding to high-impact campaign creative.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />',
      gradientClass: 'from-pink-500 to-rose-400'
    },
    {
      title: 'Digital Art & Illustration',
      description: 'Bespoke digital art and illustrations that give your brand an unassailable creative edge. We produce unforgettable visuals, from icons to 3D motion graphics.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />',
      gradientClass: 'from-purple-500 to-indigo-400'
    },
    {
      title: 'Facebook Ads',
      description: 'Data-driven Facebook & Instagram ad campaigns that convert. We leverage advanced audience modeling and creative testing to maximize your Return On Ad Spend (ROAS).',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />',
      gradientClass: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Instagram Ads',
      description: 'Visually-led campaigns for Instagram that stop the scroll. We produce stunning creative for Stories, Reels, and the feed to drive brand equity and direct response.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />',
      gradientClass: 'from-pink-600 to-purple-500'
    },
    {
      title: 'Google Ads (PPC)',
      description: 'Dominate high-intent search traffic with performance-driven Google Ads. We architect full-funnel strategies from keyword research to landing page optimization.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',
      gradientClass: 'from-yellow-500 to-orange-400'
    },
    {
      title: 'YouTube Ads',
      description: 'High-impact YouTube advertising that builds brands and drives action. We produce and target video creative that captivates audiences from the first frame.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
      gradientClass: 'from-red-600 to-red-400'
    },
    {
      title: 'TikTok Ads',
      description: 'Authentic, high-velocity TikTok campaigns that resonate with culture. We create native-style content that drives viral engagement and connects you with the next generation.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />',
      gradientClass: 'from-cyan-400 to-teal-400'
    },
    {
      title: 'Snapchat Ads',
      description: 'Immersive AR Lenses and vertical video ads for Snapchat. We create interactive experiences that drive engagement and affinity with a mobile-first audience.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />',
      gradientClass: 'from-yellow-400 to-yellow-300'
    },
    {
      title: 'Pinterest Ads',
      description: 'Visual discovery campaigns on Pinterest that convert inspiration into sales. Ideal for e-commerce and lifestyle brands targeting consumers in the purchase planning phase.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />',
      gradientClass: 'from-red-500 to-rose-500'
    }
  ];

  services = this.rawServices.map(s => ({
    ...s,
    iconSvg: this.sanitizer.bypassSecurityTrustHtml(s.iconSvg)
  }));
}