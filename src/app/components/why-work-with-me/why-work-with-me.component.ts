import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-work-with-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-work-with-me.component.html',
  styleUrls: ['./why-work-with-me.component.scss']
})
export class WhyWorkWithMeComponent {
  reasons = [
    {
      icon: 'fa-layer-group',
      title: 'Full-Stack Expertise',
      description: 'I build complete applications from frontend to backend, ensuring seamless integration.'
    },
    {
      icon: 'fa-code',
      title: 'Clean & Maintainable Code',
      description: 'I follow best practices and write clean, well-documented code that is easy to maintain.'
    },
    {
      icon: 'fa-rocket',
      title: 'Performance Optimization',
      description: 'I optimize applications for speed, efficiency, and scalability.'
    },
    {
      icon: 'fa-comments',
      title: 'Real-Time Applications',
      description: 'I build real-time features using WebSockets and Socket.io.'
    },
    {
      icon: 'fa-robot',
      title: 'AI & Modern Tech',
      description: 'I explore and implement AI-powered features and modern web technologies.'
    },
    {
      icon: 'fa-handshake',
      title: 'Reliable & Professional',
      description: 'I deliver high-quality work on time and communicate clearly throughout the process.'
    }
  ];
}
