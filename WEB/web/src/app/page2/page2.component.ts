import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignalRService } from '../signalr.service';
import { Message } from '../message';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  messages: Message[]=[];

  constructor(private signalRService: SignalRService) {}
  
  ngOnInit() {
    // Subscribe to messageReceived observable
     this.signalRService.messageReceived.subscribe({
      next: value => {this.messages.push(value)},
      //console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('completed ')
      });
        
  }
}