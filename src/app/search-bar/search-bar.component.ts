import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  emptyInput: boolean = false;
  @Output() searchTermEmitter: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    if (this.searchTerm == '') {
      this.emptyInput = true;
    }
    else {
      this.emptyInput = false;
    }
  }

  confirmWord() {
    this.searchTermEmitter.emit(this.searchTerm)
  }

}
