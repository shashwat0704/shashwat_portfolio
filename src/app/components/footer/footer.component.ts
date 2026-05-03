import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  submitting = false;
  submitted = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.submitting = true;
    this.error = false;

    this.http.post('https://formspree.io/f/mojrjoeg', formData).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        form.reset();
      },
      error: () => {
        this.submitting = false;
        this.error = true;
      }
    });
  }
}
