import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoButtonComponent } from './neo-button.component';

describe('NeoButtonComponent', () => {
  let component: NeoButtonComponent;
  let fixture: ComponentFixture<NeoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
