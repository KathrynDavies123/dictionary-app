import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DefinitionComponent } from './definition/definition.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dictionary-app';
  darkMode: boolean = false;
  selectedFont: string = 'Sans Serif';
  searchTerm: string | undefined;
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent | undefined;
  @ViewChild(SearchBarComponent) searchComponent: SearchBarComponent | undefined;
  @ViewChild(DefinitionComponent) definitionComponent: DefinitionComponent | undefined;

  constructor() {

  }

  changeFont() {
    if (this.headerComponent) {
      this.selectedFont = this.headerComponent.selectedFont;
    }
  }

  updateDefinition() {
    if(this.searchComponent && this.definitionComponent) {
      this.searchTerm = this.searchComponent.searchTerm;
      this.definitionComponent.updateDefinition(this.searchTerm);
    }
  }
}
