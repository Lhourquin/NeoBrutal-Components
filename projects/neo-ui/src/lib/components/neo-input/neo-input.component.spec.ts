import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoInputComponent } from './neo-input.component';

describe('NeoInputComponent', () => {
  let component: NeoInputComponent;
  let fixture: ComponentFixture<NeoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
