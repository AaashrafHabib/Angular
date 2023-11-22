import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements  OnInit { 
  @Input() color="white"; 
  backgroundColor="lightblue"; 
  size='15px'; 
  ngOnInit(): void {
  }
    sizechanger(size:HTMLInputElement) { 

      this.size=size.value+'px'; 
    }
  

}
