import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dictionary-app';
  darkMode: boolean = false;
  selectedFont: string = 'Sans Serif';
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent | undefined;

  changeFont() {
    if (this.headerComponent) {
      this.selectedFont = this.headerComponent.selectedFont;
    }
  }
}
