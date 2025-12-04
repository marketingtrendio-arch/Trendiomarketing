import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="pt-10 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Terms & Conditions</h1>
      <div class="prose prose-slate dark:prose-invert prose-cyan">
        <p class="text-slate-600 dark:text-gray-300 mb-6">Welcome to TrendioMarketing. By accessing or using our website and services, you agree to be bound by these terms.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Services</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">TrendioMarketing provides digital marketing services including but not limited to web development, graphic design, and advertising management. Specific deliverables are outlined in individual client contracts.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Intellectual Property</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">Upon full payment, rights to final creative assets are transferred to the client. TrendioMarketing retains the right to display the work in our portfolio and marketing materials.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Payment Terms</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">Payment schedules are agreed upon prior to project commencement. Late payments may result in suspension of services.</p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Limitation of Liability</h3>
        <p class="text-slate-600 dark:text-gray-300 mb-6">TrendioMarketing shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
      </div>
    </div>
  `
})
export class TermsComponent {}