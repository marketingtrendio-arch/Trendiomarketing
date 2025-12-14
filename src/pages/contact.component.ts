import { Component, signal, ElementRef, ViewChild, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Declare EmailJS global variable
declare var emailjs: any;
// Declare intl-tel-input global variable
declare var intlTelInput: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  encapsulation: ViewEncapsulation.None, // Vital for styling intl-tel-input dropdown appended to body
  styles: [`
    /* Dropdown Keyframes */
    @keyframes dropdownSlideIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Dropdown Container - STRICT BLACK BACKGROUND */
    .iti__country-list {
      background-color: #000000 !important;
      border: 1px solid #333333 !important;
      border-radius: 12px !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.9) !important;
      padding: 10px 0 !important;
      width: 360px !important; /* Wider for better clarity */
      max-height: 350px !important;
      z-index: 10000 !important;
      font-family: 'Outfit', sans-serif !important;
      margin-top: 8px !important;
      animation: dropdownSlideIn 0.2s ease-out forwards;
    }

    /* Individual Row */
    .iti__country {
      display: flex !important;
      align-items: center !important;
      padding: 14px 20px !important; /* More breathing room */
      border-bottom: 1px solid #222222 !important; /* Subtle separator */
      transition: background-color 0.15s ease !important;
      gap: 12px !important;
    }
    
    .iti__country:last-child {
      border-bottom: none !important;
    }

    /* Hover State */
    .iti__country:hover, 
    .iti__country.iti__highlight {
      background-color: #1a1a1a !important;
    }

    /* Flag */
    .iti__flag {
      transform: scale(1.1) !important; 
      border-radius: 2px !important;
      box-shadow: 0 0 4px rgba(0,0,0,0.8) !important;
    }

    /* Country Name */
    .iti__country-name {
      font-size: 16px !important;
      font-weight: 500 !important;
      color: #ffffff !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      flex: 1 !important;
    }

    /* Dial Code */
    .iti__dial-code {
      font-size: 14px !important;
      color: #cccccc !important; /* Brighter gray for better readability */
      font-weight: 400 !important;
      opacity: 0.9 !important;
    }

    /* Search Input */
    .iti__search-input {
      background-color: #111111 !important;
      border: 1px solid #444444 !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      padding: 14px !important;
      font-size: 15px !important;
      margin: 10px 15px 15px 15px !important; /* Comfortable margin */
      width: calc(100% - 30px) !important;
      outline: none !important;
    }

    .iti__search-input:focus {
      border-color: #ffffff !important; /* Clear focus indicator */
      background-color: #000000 !important;
      box-shadow: 0 0 0 2px rgba(255,255,255,0.1) !important;
    }
    
    .iti__search-input::placeholder {
      color: #777777 !important;
    }
    
    /* Scrollbar styling */
    .iti__country-list::-webkit-scrollbar {
      width: 10px;
    }
    .iti__country-list::-webkit-scrollbar-track {
      background: #000000;
      border-radius: 0 12px 12px 0;
    }
    .iti__country-list::-webkit-scrollbar-thumb {
      background-color: #333333;
      border-radius: 5px;
      border: 2px solid #000000;
    }
    .iti__country-list::-webkit-scrollbar-thumb:hover {
      background-color: #555555;
    }
    
    /* Input field padding adjustment */
    .iti__tel-input {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }
    
    /* Submit Button Shine */
    @keyframes shine {
      100% {
        left: 125%;
      }
    }
  `],
  template: `
    <div class="pt-10 pb-20 transition-colors duration-500 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's <span class="text-cyan-600 dark:text-cyan-400">Build</span></h1>
          <p class="text-xl text-slate-600 dark:text-gray-400">Ready to engineer your growth? Complete the form to schedule your strategy call.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
             <div class="glass-panel card-clean-light p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:scale-[1.01] transition-transform duration-300">
               <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
               <div class="space-y-6">
                 <div class="flex items-start group">
                   <div class="flex-shrink-0">
                     <div class="w-12 h-12 bg-cyan-100 dark:bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                       <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                     </div>
                   </div>
                   <div class="ml-4">
                     <p class="text-lg font-medium text-slate-900 dark:text-white">Email</p>
                     <p class="text-slate-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">MarketingTrendio@gmail.com</p>
                   </div>
                 </div>

                 <div class="flex items-start group">
                   <div class="flex-shrink-0">
                     <div class="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                       <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                   </div>
                   <div class="ml-4">
                     <p class="text-lg font-medium text-slate-900 dark:text-white">Working Hours</p>
                     <p class="text-slate-600 dark:text-gray-400">Mon - Fri: 9am - 6pm EST</p>
                   </div>
                 </div>
               </div>
             </div>

             <div class="p-8 rounded-2xl bg-gradient-to-br from-cyan-600 to-purple-700 text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300">
               <h3 class="text-xl font-bold mb-2">Pro Tip</h3>
               <p class="text-cyan-50 opacity-90">Provide as much detail as possible. The more data we have, the more precise our growth strategy will be.</p>
             </div>
          </div>

          <!-- Contact Form -->
          <div class="glass-panel card-clean-light p-8 rounded-2xl border border-slate-200 dark:border-white/5 hover:shadow-2xl transition-shadow duration-500">
            @if (submitted()) {
              <div class="h-full flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                <div class="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                  <svg class="w-10 h-10 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p class="text-slate-600 dark:text-gray-400">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button (click)="resetForm()" class="mt-6 text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-white font-medium hover:underline transition-all">Send another message</button>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="group">
                  <label for="name" class="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-1 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors">Name</label>
                  <input type="text" id="name" formControlName="name" name="name" class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-slate-400 dark:placeholder-gray-500 shadow-sm focus:shadow-lg focus:shadow-cyan-500/10 focus:-translate-y-0.5" placeholder="Your Name">
                </div>
                <div class="group">
                  <label for="email" class="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-1 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors">Email</label>
                  <input type="email" id="email" formControlName="email" name="email" class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-slate-400 dark:placeholder-gray-500 shadow-sm focus:shadow-lg focus:shadow-cyan-500/10 focus:-translate-y-0.5" placeholder="your@email.com">
                </div>
                
                <div class="group">
                  <label for="whatsapp" class="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-1 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors">WhatsApp Number <span class="text-cyan-500">*</span></label>
                  <div class="relative w-full text-slate-900 dark:text-white">
                    <input #phoneInput type="tel" id="whatsapp" class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-slate-400 dark:placeholder-gray-500 shadow-sm focus:shadow-lg focus:shadow-cyan-500/10 focus:-translate-y-0.5" placeholder="">
                  </div>
                  @if (contactForm.get('whatsapp')?.hasError('invalidNumber') && contactForm.get('whatsapp')?.touched) {
                    <p class="text-red-500 text-xs mt-1 animate-fade-in">Please enter a valid phone number for the selected country.</p>
                  }
                  @if (contactForm.get('whatsapp')?.hasError('required') && contactForm.get('whatsapp')?.touched && !contactForm.get('whatsapp')?.hasError('invalidNumber')) {
                    <p class="text-red-500 text-xs mt-1 animate-fade-in">Phone number is required.</p>
                  }
                </div>

                <div class="group">
                  <label for="service" class="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-1 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors">Service Interested In</label>
                  <select id="service" formControlName="service" name="service" class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 shadow-sm focus:shadow-lg focus:shadow-cyan-500/10 focus:-translate-y-0.5">
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Social Media Ads">Social Media Ads</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Digital Art">Digital Art</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="group">
                  <label for="message" class="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-1 group-focus-within:text-cyan-600 dark:group-focus-within:text-cyan-400 transition-colors">Message</label>
                  <textarea id="message" formControlName="message" name="message" rows="4" class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 placeholder-slate-400 dark:placeholder-gray-500 shadow-sm focus:shadow-lg focus:shadow-cyan-500/10 focus:-translate-y-0.5" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" 
                        [disabled]="contactForm.invalid || isSubmitting()" 
                        class="w-full bg-gradient-primary text-white font-bold py-4 rounded-lg hover:opacity-95 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center overflow-hidden relative">
                  <!-- Button Glow Effect -->
                  <span class="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full hover:animate-[shine_1s_ease-in-out]"></span>
                  
                  @if (isSubmitting()) {
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  } @else {
                    Send Message
                  }
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  
  contactForm: FormGroup;
  submitted = signal(false);
  isSubmitting = signal(false);
  iti: any;

  // USER PROVIDED EMAILJS CONFIGURATION
  private readonly SERVICE_ID = 'service_ujghf0j';
  private readonly TEMPLATE_ID = 'template_wd9olmu';
  private readonly PUBLIC_KEY = '8jr4NesX5T1aU6rSd';

  // Centralized recipient email to ensure all notifications go to a single, correct address.
  private readonly RECIPIENT_EMAIL = 'MarketingTrendio@gmail.com';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      service: [''],
      message: ['', Validators.required]
    });

    // Initialize EmailJS
    try {
      if (typeof emailjs !== 'undefined') {
        emailjs.init(this.PUBLIC_KEY);
      }
    } catch (e) {
      console.warn('EmailJS SDK not loaded', e);
    }
  }

  ngAfterViewInit() {
    if (this.phoneInput && typeof intlTelInput !== 'undefined') {
      const input = this.phoneInput.nativeElement;
      
      this.iti = intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: (callback: any) => {
          fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
        separateDialCode: true,     // Flag + Code on left, number on right
        strictMode: true,           // Enforces numeric input & max length validation
        nationalMode: true,
        autoInsertDialCode: true,
        allowDropdown: true,         // Enables country dropdown
        i1n: {
          searchPlaceholder: "Search country or code..."
        }
      });

      // Handle phone number validation and formatting
      const handleChange = () => {
        if (this.iti.isValidNumber()) {
           // Get E.164 formatted number (e.g., +15551234567)
           const fullNumber = this.iti.getNumber();
           this.contactForm.patchValue({ whatsapp: fullNumber }, { emitEvent: false });
           this.contactForm.get('whatsapp')?.setErrors(null);
        } else {
           const val = input.value;
           if (val && val.trim().length > 0) {
              // Mark as invalid if there is input but strict validation fails
              this.contactForm.get('whatsapp')?.setErrors({ invalidNumber: true });
           } else {
              // Let required validator handle empty state
              this.contactForm.patchValue({ whatsapp: '' }, { emitEvent: false });
              this.contactForm.get('whatsapp')?.updateValueAndValidity(); 
           }
        }
      };

      input.addEventListener('countrychange', handleChange);
      input.addEventListener('input', handleChange);
      input.addEventListener('change', handleChange);
    }
  }

  ngOnDestroy() {
    if (this.iti) {
      this.iti.destroy();
    }
  }

  async onSubmit() {
    // Mark all as touched to show errors
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        whatsapp: this.contactForm.value.whatsapp, // Sent in E.164 format
        service: this.contactForm.value.service || 'Not Specified',
        message: this.contactForm.value.message,
        to_email: this.RECIPIENT_EMAIL // Using the single, defined recipient email.
      };

      try {
        await emailjs.send(
          this.SERVICE_ID,
          this.TEMPLATE_ID,
          templateParams
        );
        this.submitted.set(true);
      } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }

  resetForm() {
    this.submitted.set(false);
    this.contactForm.reset();
    if (this.iti) {
      this.iti.setNumber('');
    }
  }
}