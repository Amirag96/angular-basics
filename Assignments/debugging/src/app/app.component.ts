import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Error: Cannot read properties of undefined (reading 'push')
  //so servers must be initialized 
   servers=[];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    // Debugging Logical Errors using sourcemaps (converts javascript code to typescript) breakpoints
    // Sourcemaps are found in (main.bundle.js or webpacks)
    // const position = id + 1;
    const position = id ;
    this.servers.splice(position, 1);
  }
}
