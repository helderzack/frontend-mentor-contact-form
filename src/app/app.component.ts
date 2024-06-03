import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contactForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailAddress: new FormControl(''),
      queryType: new FormControl(''),
      message: new FormControl(''),
      consent: new FormControl('')
    }
  );

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
