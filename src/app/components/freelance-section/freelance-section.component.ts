import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-freelance-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freelance-section.component.html',
  styleUrls: ['./freelance-section.component.scss']
})
export class FreelanceSectionComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  services = [
    { icon: 'fa-code', name: 'Full-Stack Web Applications' },
    { icon: 'fa-paint-brush', name: 'Frontend Development' },
    { icon: 'fa-server', name: 'Backend / API Development' },
    { icon: 'fa-database', name: 'Database-Driven Systems' },
    { icon: 'fa-bolt', name: 'Real-Time Applications' },
    { icon: 'fa-shopping-cart', name: 'E-Commerce Solutions' },
    { icon: 'fa-plug', name: 'Third-Party API Integrations' },
    { icon: 'fa-credit-card', name: 'Payment Gateway Integration' },
    { icon: 'fa-robot', name: 'AI-Powered Web Applications' }
  ];

  scrollToContact() {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
