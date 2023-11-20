/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefinitionComponent } from './definition.component';

describe('DefinitionComponent', () => {
  let component: DefinitionComponent;
  let fixture: ComponentFixture<DefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
