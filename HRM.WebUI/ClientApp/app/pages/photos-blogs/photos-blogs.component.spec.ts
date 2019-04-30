import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosBlogsComponent } from './photos-blogs.component';

describe('PhotosBlogsComponent', () => {
  let component: PhotosBlogsComponent;
  let fixture: ComponentFixture<PhotosBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
