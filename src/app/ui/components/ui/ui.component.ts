import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public closeAside: boolean;
  constructor() {
    this.closeAside = false;
  }

  ngOnInit(): void {}

  public toggleNav(): void {
    this.closeAside = !this.closeAside;
  }
}
