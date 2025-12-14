import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-slate-900 pt-20 pb-24 min-h-screen transition-colors duration-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-16 animate-slide-up">
          <h1 class="text-5xl md:text-6xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-4 tracking-tight">Terms of Engagement</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">The operational framework for our partnership.</p>
          <p class="mt-4 text-sm font-mono text-slate-400 dark:text-slate-500">Last Updated: October 26, 2024</p>
        </div>

        <!-- Content -->
        <div class="prose prose-lg prose-slate dark:prose-invert max-w-none dark:[--tw-prose-body:theme('colors.cyan.400')] dark:[--tw-prose-bullets:theme('colors.cyan.400')] dark:[--tw-prose-bold:theme(colors.white)] prose-h2:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h2:text-slate-800 dark:prose-h2:text-white prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:font-semibold hover:prose-a:text-cyan-500 dark:hover:prose-a:text-cyan-300 animate-fade-in delay-200">
          
          <h2>1.0 Agreement</h2>
          <p>These Terms of Engagement ("Terms") govern the partnership between you ("Client") and TrendioMarketing ("Agency"). Engaging our services constitutes your agreement to these terms, which, alongside a signed Statement of Work (SOW), form our complete operational agreement.</p>

          <h2>2.0 Scope of Services</h2>
          <p>The specific deliverables, timelines, and Key Performance Indicators (KPIs) for your project are defined in the SOW. Our services include, but are not limited to, Digital Advertising, Creative Services, and Web Development.</p>

          <h2>3.0 Client Responsibilities</h2>
          <p>Optimal performance requires collaboration. The Client agrees to provide timely access to necessary platforms, brand assets, and feedback. Delays in providing these inputs may impact project timelines and outcomes.</p>

          <h2>4.0 Fees & Payment Terms</h2>
          <p>Payment terms are detailed in the SOW or invoice. Services are typically billed on a retainer basis, payable upon receipt. Late payments may result in service suspension and interest accrual.</p>
          
          <h2>5.0 Intellectual Property</h2>
          <ul>
            <li><strong>Client IP:</strong> You retain full ownership of your pre-existing intellectual property and any content you provide to us ("Client Content").</li>
            <li><strong>Deliverables:</strong> Upon full and final payment, the Client is granted full ownership rights to the final, delivered work product specified in the SOW.</li>
            <li><strong>Agency Rights:</strong> We reserve the right to display completed work in our portfolio for promotional purposes, unless a non-disclosure agreement (NDA) is in place. The Agency retains ownership of all preliminary concepts and unused materials.</li>
          </ul>
          
          <h2>6.0 Performance Disclaimer</h2>
          <p>We commit our full expertise to achieving your goals. However, we do not guarantee specific results. Market dynamics, platform algorithm changes, and other variables are beyond our direct control. Our focus is on strategy, execution, and data-driven optimization.</p>

          <h2>7.0 Termination</h2>
          <p>Either party may terminate the agreement with 30 days' written notice. The Client is responsible for payment for all services rendered up to the termination date.</p>

          <h2>8.0 Limitation of Liability</h2>
          <p>In no event shall TrendioMarketing be liable for any lost profits or any indirect, consequential, or incidental damages. The Agency's total liability is limited to the total fees paid for the services under the applicable SOW.</p>

          <h2>9.0 Governing Law</h2>
          <p>This agreement is governed by and construed in accordance with the laws of the jurisdiction in which TrendioMarketing is legally registered.</p>
          
          <h2>10.0 Amendments</h2>
          <p>We reserve the right to update these Terms. Significant changes will be communicated to active clients. Continued engagement of our services after such changes constitutes acceptance of the new terms.</p>
          
          <h2>11.0 Contact</h2>
          <p>For any questions regarding these Terms of Engagement, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:MarketingTrendio@gmail.com">MarketingTrendio@gmail.com</a></p>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent {}