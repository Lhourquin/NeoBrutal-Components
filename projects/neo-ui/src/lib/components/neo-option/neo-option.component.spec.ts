import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoOptionComponent } from './neo-option.component';

describe('NeoOptionComponent', () => {
  let component: NeoOptionComponent;
  let fixture: ComponentFixture<NeoOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
