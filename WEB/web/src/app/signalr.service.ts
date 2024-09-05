import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, Subject } from '@microsoft/signalr';


@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: HubConnection;

  // Observable to expose the received messages
  public messageReceived = new Subject<{ user: string, message: string }>();
  
  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7252/chathub',{ withCredentials: false })  // URL of your SignalR hub
      .withAutomaticReconnect()
      .build();

    this.hubConnection.on('ReceiveMessage', (user: string, message: string) => {
      // Emit the received message to subscribers
      this.messageReceived.next({ user, message });
    });

    this.hubConnection.start().catch(err => console.error(err));
  }

  public sendMessage(user: string, message: string): void {
    this.hubConnection.send('SendMessage', user, message).catch(err => console.error(err));
  }

  public receiveMessage(user: string, message: string): void {
    this.hubConnection.send('SendMessage', user, message).catch(err => console.error(err));
  }
}
