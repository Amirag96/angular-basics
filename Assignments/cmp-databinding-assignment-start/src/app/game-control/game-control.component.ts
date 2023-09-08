import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 
  @Output() startGame = new EventEmitter<{counter: number}>();
  counter: number=0; 
  private intervalId: any;
  displayResult = false;

  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    
    if(this.displayResult ===true){
      this.displayResult = false;
    } 

    // Check if there's an existing interval and clear it
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
     // Set up a new interval to emit the event every second
    this.intervalId = setInterval(() => {
        this.counter++;
        this.startGame.emit({counter: this.counter});
      }, 1000); // 1000 milliseconds = 1 second
  }

  onPauseGame(){
    clearInterval(this.intervalId);
    this.displayResult = true;
    
  }
}
