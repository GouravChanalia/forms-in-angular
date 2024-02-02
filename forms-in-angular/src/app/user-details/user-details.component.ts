import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { dob } from '../../../custom-validators';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  userForm: any = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dob: ['', [Validators.required, dob()]],
    email: ['', [Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/g), Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    address: this.fb.group({
      lane: [''],
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });
  ngOnInit(): void {
      console.log(this.userForm);
  }
}
