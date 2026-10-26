import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  expandedId: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.experiences = this.dataService.getExperiences();
    // Auto-expand the first experience
    if (this.experiences.length > 0) {
      this.expandedId = this.experiences[0].id;
    }
  }

  toggleExpand(id: number) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedId === id;
  }
}
