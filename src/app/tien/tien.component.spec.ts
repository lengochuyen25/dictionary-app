import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TienComponent } from './tien.component';

describe('TienComponent', () => {
  let component: TienComponent;
  let fixture: ComponentFixture<TienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
