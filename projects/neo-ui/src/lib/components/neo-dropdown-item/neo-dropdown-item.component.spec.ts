import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoDropdownItemComponent } from './neo-dropdown-item.component';

describe('NeoDropdownItemComponent', () => {
  let component: NeoDropdownItemComponent;
  let fixture: ComponentFixture<NeoDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoDropdownItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
