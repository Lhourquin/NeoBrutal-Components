import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoDropdownComponent } from './neo-dropdown.component';

describe('NeoDropdownComponent', () => {
  let component: NeoDropdownComponent;
  let fixture: ComponentFixture<NeoDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
