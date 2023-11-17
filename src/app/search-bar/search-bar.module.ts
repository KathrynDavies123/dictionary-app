import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule, 
    FormsModule
  ],
  declarations: [SearchBarComponent],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
