import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  // profileForm: any = new FormGroup({
  //   firstName: new FormControl(""),
  //   lastName: new FormControl("")
  // });
  profileForm: any = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  fullName: string = "";
  console(formField: string): void {
    if(formField){
      console.log(this.profileForm.get(formField));
    } else {
      console.log(this.profileForm);
    }
  }
  ngOnInit(): void {
      this.profileForm.patchValue({
        firstName: "Gourav",
        lastName: "Kumar"
      });
      this.profileForm.valueChanges.subscribe((value: any) => {
        console.log(value);
      })
  }
}
