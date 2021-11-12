import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  onOpen = false;

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    if (!this.onOpen) {
      this.onOpen = true;
    } else {
      this.onOpen = false;
    }
  }

  closeMenu() {
    this.onOpen = false;
  }
}
