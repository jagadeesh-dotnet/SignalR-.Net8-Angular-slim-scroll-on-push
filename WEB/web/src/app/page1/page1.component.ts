import { Component } from '@angular/core';
import { SignalRService } from '../signalr.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  title = 'web';
  user:any='';
  message:any='';

  constructor(private signalRService: SignalRService) {}

 sendMessage(): void {
   this.signalRService.sendMessage(this.user, this.message);
   alert('message sent');
  }
}
