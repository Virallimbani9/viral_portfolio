import { Component, HostListener, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, ActivationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

// Import all components used by the root template
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Viral Limbani - Full-Stack Developer';
  isScrolled = false;
  private observer?: IntersectionObserver;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    // No-op. The observer runs after routed component activation.
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  onActivate() {
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 50);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.observer?.disconnect();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  setupIntersectionObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer?.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      this.observer?.observe(el);
    });
  }
}
