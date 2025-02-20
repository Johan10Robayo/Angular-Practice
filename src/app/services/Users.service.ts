import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State
{
  users: User[];
  loadign: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  //estado privado
  #state = signal<State>({
    loadign: true,
    users: []
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loadign);
  


  constructor() {
    this.http.get<UsersResponse>("https://reqres.in/api/users")
    .pipe(delay(1000))
    .subscribe(res =>
    {
      this.#state.set({loadign: false,users: res.data,});

    }
    );
   }

   getUserById(id:String)
   {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1000),
      map(res => res.data)
    );
    

   }

}
