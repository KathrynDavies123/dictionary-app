import { ApiService } from './../api-service/api-service';
import { Component, OnInit } from '@angular/core';
import { DictionaryDefinition } from '../config/constants';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  apiData: DictionaryDefinition | undefined;
  constructor(private apiService: ApiService) {
    
  }

  ngOnInit() {
  }

  updateDefinition(searchTerm: string) {
    this.apiService.getDefinitionByWord(searchTerm).subscribe(data => {
      this.apiData = data;
    });
  }
}
