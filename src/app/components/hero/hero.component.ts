import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  totalExperience = '3+ years';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.totalExperience = this.dataService.getTotalExperience();
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/resume/Viral-Limbani-Resume.pdf';
    link.download = 'Viral-Limbani-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
