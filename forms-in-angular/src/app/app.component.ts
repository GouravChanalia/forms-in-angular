import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, ProfileEditorComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  favouriteColorControl: any = new FormControl("Red");
  favouriteColor: string = "";
  console(): void {
    console.log(this.favouriteColorControl);
  }
  update(): void {
    this.favouriteColorControl.setValue("Green");
    this.console();
  }
  ngOnInit(): void {
      this.favouriteColorControl.valueChanges.subscribe((value: string) => this.favouriteColor = value );
  }
}
