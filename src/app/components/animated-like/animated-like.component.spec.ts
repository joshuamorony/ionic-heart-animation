import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLikeComponent } from './animated-like.component';

describe('AnimatedLikeComponent', () => {
  let component: AnimatedLikeComponent;
  let fixture: ComponentFixture<AnimatedLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
