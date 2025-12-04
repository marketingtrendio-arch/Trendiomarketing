import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-500">
      <!-- Global Ambient Background -->
      <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <!-- Blobs -->
         <!-- Light Mode: Pastel, watercolor feel. Dark Mode: Neon glow. -->
         <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-300/40 dark:bg-purple-900/10 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
         <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-300/40 dark:bg-cyan-900/10 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
         <div class="absolute top-[30%] right-[20%] w-[30vw] h-[30vw] bg-pink-300/40 dark:bg-pink-900/10 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
         
         <!-- Noise Texture Overlay for Premium Feel -->
         <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
      </div>

      <app-navbar />
      
      <main class="flex-grow pt-16 relative z-10">
        <router-outlet />
      </main>
      
      <app-footer />

      <!-- Floating Glass WhatsApp Button -->
      <a href="https://wa.me/03703507083" target="_blank" class="fixed bottom-8 right-8 z-[100] group">
        <div class="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/30 shadow-[0_4px_20px_rgba(74,222,128,0.4)] group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(74,222,128,0.6)] animate-bounce-slow">
           <!-- Inner Glow Circle -->
           <div class="absolute inset-0 rounded-full bg-green-500/10 animate-ping opacity-75"></div>
           
           <!-- Icon -->
           <svg class="w-8 h-8 text-green-600 dark:text-green-400 z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
           </svg>
           
           <!-- Tooltip -->
           <span class="absolute right-full mr-4 px-3 py-1 bg-white dark:bg-slate-800 backdrop-blur text-slate-900 dark:text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-200 dark:border-white/10">
             Chat on WhatsApp
           </span>
        </div>
      </a>
    </div>
    <style>
      .animate-bounce-slow {
        animation: bounce 3s infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    </style>
  `
})
export class AppComponent {}