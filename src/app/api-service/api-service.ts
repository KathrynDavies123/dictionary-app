import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    public readonly apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    constructor(private http: HttpClient) { }
    
    getDefinitionByWord(word: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}${word}`);
    }
}