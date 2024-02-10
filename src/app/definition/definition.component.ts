import { ApiService } from './../api-service/api-service';
import { Component, Input, OnInit } from '@angular/core';
import { DictionaryDefinition } from '../config/constants';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  @Input() searchTerm: string | undefined;
  apiData: DictionaryDefinition | undefined;
  apiError: boolean = false;

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit() {
  }

  updateDefinition(searchTerm: string) {
    this.apiData = undefined;
    this.apiError = false;
    this.apiService.getDefinitionByWord(searchTerm).subscribe({
      next: (data) => {
        this.apiData = data;
      },
      error: () => {
        this.apiError = true;
      }
  })
  }

  playAudio(data: DictionaryDefinition){
    const audio = new Audio();
    for (let i=0; i< data[0].phonetics.length; i++) {
      audio.src = data[0].phonetics[i].audio;
      if (data[0].phonetics[i].audio !== '') {
        break;
      }
    }
    audio.load();
    audio.play();
  }

}
