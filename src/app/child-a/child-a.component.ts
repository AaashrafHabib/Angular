import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent {
 @Input() filsprop:string|undefined; 
ngOnInit(): void {
  console.log(this.filsprop);  
}

}
