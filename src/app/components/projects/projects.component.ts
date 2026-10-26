import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  selectedImageIndex = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }

  openProject(project: Project) {
    this.selectedProject = project;
    this.selectedImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.selectedProject && this.selectedProject.images) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.selectedProject.images.length;
    }
  }

  prevImage() {
    if (this.selectedProject && this.selectedProject.images) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
    }
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'ai': 'fa-robot',
      'real-time': 'fa-comments',
      'content': 'fa-newspaper',
      'ecommerce': 'fa-shopping-cart'
    };
    return icons[category] || 'fa-code';
  }
}
