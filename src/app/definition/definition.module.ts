import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionComponent } from './definition.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [DefinitionComponent],
  exports: [
    DefinitionComponent
  ]
})
export class DefinitionModule { }
