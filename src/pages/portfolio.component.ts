import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface PortfolioItem {
  title: string;
  client: string;
  description: string;
  categories: string[];
  seed: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white dark:bg-slate-900 pt-12 pb-24 min-h-screen transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16 animate-slide-up">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Our <span class="text-gradient">Work</span></h1>
          <p class="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of successful partnerships and data-driven results. Explore how we've elevated brands across industries.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex justify-center flex-wrap gap-4 mb-12 animate-fade-in delay-200">
          @for (category of categories(); track category) {
            <button
              (click)="setFilter(category)"
              class="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              [class]="activeFilter() === category ? 'bg-gradient-primary text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'"
            >
              {{ category }}
            </button>
          }
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of filteredItems(); track item.title; let i = $index) {
            <div 
              class="glass-panel card-clean-light rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full animate-slide-up"
              [style.animation-delay]="(i * 100) + 'ms'"
            >
              <!-- Image -->
              <div class="relative w-full aspect-[4/3] overflow-hidden">
                <img [ngSrc]="'https://picsum.photos/seed/' + item.seed + '/600/400'" 
                     fill 
                     class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                     [alt]="item.title">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <!-- Content -->
              <div class="p-6 flex-grow flex flex-col bg-white dark:bg-slate-850">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">{{ item.title }}</h3>
                <p class="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">{{ item.client }}</p>
                <p class="text-slate-600 dark:text-gray-400 leading-relaxed text-sm flex-grow mb-4">{{ item.description }}</p>
                
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  @for (cat of item.categories; track cat) {
                    <span class="px-3 py-1 text-xs font-mono rounded-full text-cyan-800 bg-cyan-100 dark:text-cyan-300 dark:bg-cyan-900/50">
                      {{ cat }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class PortfolioComponent {
  portfolioItems: PortfolioItem[] = [
    {
      seed: 'ecom_launch',
      title: 'E-commerce Platform Launch',
      client: 'FutureWear Co.',
      description: 'Developed a high-performance Shopify Plus store with a custom theme, resulting in a 300% increase in conversion rate.',
      categories: ['Web Development', 'E-commerce'],
    },
    {
      seed: 'viral_campaign',
      title: 'Viral TikTok Campaign',
      client: 'SoundWave Audio',
      description: 'Launched a viral user-generated content campaign on TikTok, reaching 50M+ views and driving a 120% Q-o-Q sales lift.',
      categories: ['Social Media'],
    },
    {
      seed: 'brand_relaunch',
      title: 'Complete Brand Relaunch',
      client: 'Aura Skincare',
      description: 'Executed a full brand identity overhaul, including logo, packaging, and digital presence, leading to a 75% increase in brand recognition.',
      categories: ['Branding', 'Web Development'],
    },
    {
      seed: 'saas_growth',
      title: 'SaaS Lead Generation',
      client: 'ConnectSphere',
      description: 'Architected a multi-channel PPC and content marketing strategy that decreased CPA by 40% and generated 5,000+ MQLs.',
      categories: ['Social Media', 'PPC'],
    },
    {
      seed: 'app_install',
      title: 'Mobile App Install Campaign',
      client: 'FitTrack',
      description: 'Ran targeted ad campaigns on Instagram and Google, driving over 250,000 app installs at 20% below target CPI.',
      categories: ['Social Media', 'PPC'],
    },
    {
      seed: 'wp_site',
      title: 'Corporate WordPress Site',
      client: 'Quantum Solutions',
      description: 'Built a secure, scalable, and lightning-fast corporate website on a headless WordPress architecture, improving load times by 80%.',
      categories: ['Web Development'],
    },
  ];

  categories = signal(['All', 'Web Development', 'Social Media', 'Branding', 'E-commerce', 'PPC']);
  activeFilter = signal('All');

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.categories.includes(filter));
  });

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }
}
