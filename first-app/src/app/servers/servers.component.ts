import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  username = 'Drumbumdeedum';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  toggle = true;
  clicks = [];
  buttonClickCounter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, name is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  userNameEmpty() {
    return !this.username;
  }

  toggleButton() {
    this.toggle = !this.toggle;
    this.clicks.push(this.buttonClickCounter);
    this.clicks.push(Date());
    this.buttonClickCounter++;
  }
}
