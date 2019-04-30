import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsBlogsComponent } from './friends-blogs.component';

describe('FriendsBlogsComponent', () => {
  let component: FriendsBlogsComponent;
  let fixture: ComponentFixture<FriendsBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
