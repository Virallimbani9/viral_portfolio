import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-journey.component.html',
  styleUrls: ['./career-journey.component.scss']
})
export class CareerJourneyComponent {
  milestones = [
    { year: '2023', title: 'Started Career', description: 'Began professional journey as a Software Engineer Intern at TatvaSoft' },
    { year: '2023', title: 'Frontend Development', description: 'Gained experience with Angular.js and modern frontend practices' },
    { year: '2024', title: 'Backend & Real-Time Systems', description: 'Joined Capermint to build multiplayer game backends with Node.js and Socket.io' },
    { year: '2024', title: 'Full-Stack Development', description: 'Expanded skills across frontend, backend, databases, and cloud services' },
    { year: '2025', title: 'Advanced Full-Stack', description: 'Working with NestJS, Angular, and React at E2logy on production-grade apps' },
    { year: '2025', title: 'AI & Modern Web', description: 'Exploring AI integration and modern web technologies' }
  ];
}
