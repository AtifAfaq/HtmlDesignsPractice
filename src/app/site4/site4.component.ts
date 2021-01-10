import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-site4',
  templateUrl: './site4.component.html',
  styleUrls: ['./site4.component.scss']
})
export class Site4Component implements OnInit {
  hide: boolean = false;
  gradient: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }


  playPause() {
    var myVideo: any = document.getElementById("myVideo");

    if (myVideo.paused) {
      myVideo.play();
      this.hide = true;
    }
    else {
      myVideo.pause();
      this.hide = false;
    }
  }
}
