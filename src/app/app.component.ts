import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'achraf';
  bgcolor='yellow'; 
  show=true; 
  bgperecolor='yellow'; 
  changestatus(){
    this.show= !this.show ; 
    



  }
}
