import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollnectionsListComponent } from './collnections-list.component';

describe('CollnectionsListComponent', () => {
  let component: CollnectionsListComponent;
  let fixture: ComponentFixture<CollnectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollnectionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollnectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
