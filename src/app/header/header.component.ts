import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public fontOptions: string[] = ['Sans Serif', 'Serif', 'Mono'];
  public selectedFont: string = 'Sans Serif';
  public darkMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
