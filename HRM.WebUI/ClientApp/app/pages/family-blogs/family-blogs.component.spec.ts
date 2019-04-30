import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyBlogsComponent } from './family-blogs.component';

describe('FamilyBlogsComponent', () => {
  let component: FamilyBlogsComponent;
  let fixture: ComponentFixture<FamilyBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
