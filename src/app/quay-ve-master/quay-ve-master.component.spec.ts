import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuayVeMasterComponent } from './quay-ve-master.component';

describe('QuayVeMasterComponent', () => {
  let component: QuayVeMasterComponent;
  let fixture: ComponentFixture<QuayVeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuayVeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuayVeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
