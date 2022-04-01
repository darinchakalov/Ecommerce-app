import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAdvantagesComponent } from './our-advantages.component';

describe('OurAdvantagesComponent', () => {
  let component: OurAdvantagesComponent;
  let fixture: ComponentFixture<OurAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
