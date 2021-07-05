import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isOuterHeader: boolean;
  mode: string;
  constructor(private platform: Platform) {}

  ngOnInit() {
    if (this.platform.is('ios')) {
      this.mode = 'ios';
    } else {
      this.mode = 'android';
    }
  }
}
