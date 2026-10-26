import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  totalExperience = '3+ years';
  education = this.dataService.getEducation();

  constructor(private dataService: DataService) {
    this.totalExperience = this.dataService.getTotalExperience();
  }
}
