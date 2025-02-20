import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, TitleComponent, ReactiveFormsModule,JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export default class FormComponent {
  public form = signal<FormGroup>(
    new FormGroup(
      {
        name: new FormControl('',[Validators.required,Validators.minLength(2)]),
        tel: new FormControl(''),
        email: new FormControl(''),
        url: new FormControl(''),
        sector: new FormControl(''),
        langs: new FormControl(['javascript']),
        employeesCount: new FormControl(0)


      }
    )
  );//señal tipada
}
