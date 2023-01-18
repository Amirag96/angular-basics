import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer= false;
  outputText = "Server isn't created";
  serverName = '';
  serverCreated = false;
  servers=['server 1, server 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    }
      ,600);
   }

   onSeverCreation(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.outputText="Server is created successfully with name: "+ this.serverName;
   }
   onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
   }
   
  ngOnInit(): void {
  }

}
