import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoUiComponent } from './neo-ui.component';

describe('NeoUiComponent', () => {
  let component: NeoUiComponent;
  let fixture: ComponentFixture<NeoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
