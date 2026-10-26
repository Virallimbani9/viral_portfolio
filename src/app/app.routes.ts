import { Routes } from '@angular/router';

// Import all standalone components
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CareerJourneyComponent } from './components/career-journey/career-journey.component';
import { WhyWorkWithMeComponent } from './components/why-work-with-me/why-work-with-me.component';
import { RecruiterSectionComponent } from './components/recruiter-section/recruiter-section.component';
import { FreelanceSectionComponent } from './components/freelance-section/freelance-section.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  // Main routes for the single-page portfolio
  // These routes map to the sections in the main layout
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HeroComponent,
    title: 'Viral Limbani | Full-Stack Developer'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me | Viral Limbani'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Professional Experience | Viral Limbani'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Technical Skills | Viral Limbani'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects Portfolio | Viral Limbani'
  },
  {
    path: 'career-journey',
    component: CareerJourneyComponent,
    title: 'Career Journey | Viral Limbani'
  },
  {
    path: 'why-work-with-me',
    component: WhyWorkWithMeComponent,
    title: 'Why Work With Me | Viral Limbani'
  },
  {
    path: 'recruiter',
    component: RecruiterSectionComponent,
    title: 'For Recruiters | Viral Limbani'
  },
  {
    path: 'freelance',
    component: FreelanceSectionComponent,
    title: 'Freelance Services | Viral Limbani'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Me | Viral Limbani'
  },
  // Fallback route - redirect to home
  {
    path: '**',
    redirectTo: 'home'
  }
];
