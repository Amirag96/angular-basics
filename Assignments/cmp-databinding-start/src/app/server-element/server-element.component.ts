import { Component, 
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation:ViewEncapsulation.Emulated // (Default) Emulates Shadow DOM behavior by adding unique attributes to component elements for scoped styles.
  // None: Removes encapsulation, allowing component styles to affect the global styles.
  // ShadowDOM: Uses native Shadow DOM to provide true encapsulation for component styles and markup.

})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
 {
// All properties of a component are only accessible within the component.
// Custom property binding
// using srvElement as an alias for element to be used outside 
@Input('srvElement') element:{type:string, name:string, content:string};
@Input() name: string;
@ViewChild('heading') header: ElementRef;
@ContentChild('ContentParagraph') contentPar: ElementRef;

    constructor() { 
      console.log('constructor called!');
    }
  
    ngOnChanges(changes: SimpleChanges){
      console.log('ngOnChanges called!');
      
      console.log('changes' + changes);
    }
    ngOnInit(): void {
      console.log('ngOnInit called!');
      /* You cannot access an element in the DOM in the ngOnInit() because the element has not been rendered yet */
      // console.log('text Content: ' + this.header.nativeElement.textContent); 
      // console.log('contentPar ' + this.contentPar.nativeElement.textContent);    
    
    }

    ngDoCheck() {
      console.log('DoCheck called!');
    }  
      
    ngAfterContentInit(){
      console.log('ngAfterContentInit called!');
      console.log('contentPar ' + this.contentPar.nativeElement.textContent);    
    
    }
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit(){
      console.log('ngAfterViewInit called!');
      console.log('text Content: ' + this.header.nativeElement.textContent); 
    }
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked called!');
    }

    ngOnDestroy() {
      console.log('onDestroy called!');
    }
}
