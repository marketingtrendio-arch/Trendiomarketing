import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-slate-900 pt-20 pb-24 min-h-screen transition-colors duration-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-16 animate-slide-up">
          <h1 class="text-5xl md:text-6xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-4 tracking-tight">Privacy Protocol</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">Your data is a responsibility, not an asset.</p>
          <p class="mt-4 text-sm font-mono text-slate-400 dark:text-slate-500">Last Updated: October 26, 2024</p>
        </div>

        <!-- Content -->
        <div class="prose prose-lg prose-slate dark:prose-invert max-w-none dark:[--tw-prose-body:theme('colors.cyan.400')] dark:[--tw-prose-bullets:theme('colors.cyan.400')] dark:[--tw-prose-bold:theme(colors.white)] prose-h2:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h2:text-slate-800 dark:prose-h2:text-white prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:font-semibold hover:prose-a:text-cyan-500 dark:hover:prose-a:text-cyan-300 animate-fade-in delay-200">
          
          <h2>1.0 Our Commitment</h2>
          <p>At TrendioMarketing, we engineer for performance and build for trust. This document outlines our protocol for data privacy—how we collect, process, and protect information with precision and integrity.</p>

          <h2>2.0 Data Ingestion & Processing</h2>
          <p>To deliver our services, we process two primary types of data:</p>
          <ul>
            <li><strong>Client Operational Data:</strong> Information you provide for service execution. This includes, but is not limited to, brand assets, campaign parameters, and access credentials for third-party platforms (e.g., Meta Business Suite, Google Ads). This data is strictly firewalled for its intended operational purpose.</li>
            <li><strong>Website Interaction Data:</strong> Anonymous data collected from visitors to our domain. This includes IP address, browser type, and engagement metrics, used exclusively to analyze and optimize our own platform's performance.</li>
          </ul>

          <h2>3.0 Use of Information</h2>
          <p>Data is processed for three core functions:</p>
          <ul>
            <li><strong>Service Execution:</strong> To manage campaigns, develop assets, and execute the strategies outlined in your Statement of Work.</li>
            <li><strong>Client Communication:</strong> To deliver reports, invoices, and mission-critical service updates.</li>
            <li><strong>System Optimization:</strong> To enhance the performance and user experience of our own website and services.</li>
          </ul>

          <h2>4.0 Third-Party Platforms</h2>
          <p>We are not a walled garden. We operate on global platforms (Meta, Google, TikTok, etc.) to deliver results. Your data may be shared with these platforms for campaign execution, governed by their respective privacy protocols. <strong>We do not sell your information.</strong></p>

          <h2>5.0 Security Architecture</h2>
          <p>We implement multi-layered security protocols, including access control, end-to-end encryption, and secure credential management to protect all operational data from unauthorized access. While no system is impenetrable, ours is engineered for resilience.</p>

          <h2>6.0 Your Rights</h2>
          <p>You retain control. You have the right to request access to, correction of, or deletion of your personal data under our control, subject to legal and contractual obligations.</p>

          <h2>7.0 Protocol Amendments</h2>
          <p>The digital landscape evolves. This policy may be updated to reflect new technologies or regulations. The "Last Updated" date will always be current. We encourage you to review this protocol periodically.</p>

          <h2>8.0 Contact</h2>
          <p>For inquiries regarding our privacy protocol, please contact our data team at:</p>
          <p><strong>Email:</strong> <a href="mailto:MarketingTrendio@gmail.com">MarketingTrendio@gmail.com</a></p>
        </div>
      </div>
    </div>
  `
})
export class PrivacyComponent {}