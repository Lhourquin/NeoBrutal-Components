import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoCheckboxComponent } from './neo-checkbox.component';

describe('NeoCheckboxComponent', () => {
  let component: NeoCheckboxComponent;
  let fixture: ComponentFixture<NeoCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
