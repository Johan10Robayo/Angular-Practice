import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template : `
     <app-title title="view Transition 1"/>
    
     <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300"
      alt="picsum"
      width="200"
      height="300"
      style="view-transition-name: hero1"> 
      <div class="bg-blue-500 w-56 h-56"
      style="view-transition-name: hero2"></div>
    </section>


  `,
  styleUrl: './view-transition.component.css'
})
export default class ViewTransitionComponent {

}
