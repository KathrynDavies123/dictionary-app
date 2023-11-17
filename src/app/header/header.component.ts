import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  fontOptions: string[] = ['Sans Serif', 'Serif', 'Mono'];
  selectedFont: string = 'Sans Serif';

  @Input() darkMode: boolean = false;

  @Output() viewModeEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() fontEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  switchViewMode() {
    this.viewModeEmitter.emit();
  }

  switchFont() {
    this.fontEmitter.emit();
  }
}
