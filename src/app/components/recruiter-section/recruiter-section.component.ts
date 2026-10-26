import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruiter-section.component.html',
  styleUrls: ['./recruiter-section.component.scss']
})
export class RecruiterSectionComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/resume/Viral-Limbani-Resume.pdf';
    link.download = 'Viral-Limbani-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
