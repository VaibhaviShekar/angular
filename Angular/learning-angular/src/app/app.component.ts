import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  canIncrement=true;
  
  counterClick(e)
  {
      alert('counter clicked was '+e);
  }
}
