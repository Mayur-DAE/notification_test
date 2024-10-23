import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwPush } from "@angular/service-worker";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  title = 'client';
brijesh:any;
  constructor(private _swPush: SwPush) {}

  ngOnInit() {
    this.requestSubscription();
  }

  requestSubscription = () => {
    if (!this._swPush.isEnabled) {
      console.log("Notification is not enabled.");
      return;
    }

    this._swPush.requestSubscription({
      serverPublicKey: 'BHAr3_kphiaRAJAL6wgO7p87xrmLR-bzbqcy5e-N3iXBXAVQ8HMhlcXUQnqDHyEqk1cmJLhlijR8823zY67fZ_w'
    }).then((_) => {
      this.brijesh=JSON.stringify(_);
      console.log(JSON.stringify(_));
    }).catch((_) => console.log);
  };
}
