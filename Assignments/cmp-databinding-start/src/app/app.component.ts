import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  encapsulation:ViewEncapsulation.Emulated // (Default) Emulates Shadow DOM behavior by adding unique attributes to component elements for scoped styles.
  // None: Removes encapsulation, allowing component styles to affect the global styles.
  // ShadowDOM: Uses native Shadow DOM to provide true encapsulation for component styles and markup.
  
})
export class AppComponent {
 serverElements = [{type:'server',name:'test name',content:'test content'}];
 

 onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData: {serverName: string, serverContent:string }) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });

}

onChangeFirst(){
  this.serverElements[0].name ='changed!';
    }

onDestroyFirst(){
  this.serverElements.splice(0,1); //starting_From,No_of_Elements_to_remove
}

}
