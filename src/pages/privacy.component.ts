import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="pt-10 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
      <div class="prose prose-slate dark:prose-invert prose-cyan">
        <p class="text-slate-600 dark:text-gray-400 mb-4">Last Updated: October 24, 2023</p>
        <p class="text-slate-600 dark:text-gray-300 mb-6">At TrendioMarketing, we value your privacy. This policy outlines how we collect, use, and protect your personal information.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and company details.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">2. How We Use Your Information</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information, including invoices, technical notices, and support messages.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Data Security</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Contact Us</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">If you have any questions about this Privacy Policy, please contact us at MarketingTrendio&#64;gmail.com.</p>
      </div>
    </div>
  `
})
export class PrivacyComponent {}