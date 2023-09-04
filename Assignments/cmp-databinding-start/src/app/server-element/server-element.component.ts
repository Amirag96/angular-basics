import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation:ViewEncapsulation.Emulated // (Default) Emulates Shadow DOM behavior by adding unique attributes to component elements for scoped styles.
  // None: Removes encapsulation, allowing component styles to affect the global styles.
  // ShadowDOM: Uses native Shadow DOM to provide true encapsulation for component styles and markup.

})
export class ServerElementComponent implements OnInit {
// All properties of a component are only accessible within the component.
// Custom property binding
// using srvElement as an alias for element to be used outside 
@Input('srvElement') element:{type:string, name:string, content:string};

  constructor() { }

  ngOnInit(): void {
  }

}
