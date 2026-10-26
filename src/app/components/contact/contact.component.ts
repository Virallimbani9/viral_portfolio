import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;
  submitError = false;

  onSubmit() {
    this.isSubmitting = true;
    this.submitError = false;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.contactData = { name: '', email: '', message: '' };

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }, 1500);
  }
}
