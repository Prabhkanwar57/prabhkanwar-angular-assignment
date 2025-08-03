import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-feedback-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrls: ['./feedback-form.css'],
})
export class FeedbackFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('✅ Thanks for your feedback!');
      console.log(this.form.value);
      this.form.reset();
    }
  }
}
