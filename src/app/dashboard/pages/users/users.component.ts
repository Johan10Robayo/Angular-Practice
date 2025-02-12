import { Component, Inject, inject } from '@angular/core';
import { UsersService } from '../../../services/Users.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export default class UsersComponent {

  
  public usersService  = inject(UsersService);

  /**
   *
   */
  
}
