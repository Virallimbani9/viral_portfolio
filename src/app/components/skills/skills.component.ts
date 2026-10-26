import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.skills = this.dataService.getSkills();
    this.categories = [...new Set(this.skills.map(s => s.category))];
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(s => s.category === category);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Databases',
      'cloud': 'Cloud & DevOps',
      'tools': 'Tools',
      'other': 'Other'
    };
    return labels[category] || category;
  }
}
