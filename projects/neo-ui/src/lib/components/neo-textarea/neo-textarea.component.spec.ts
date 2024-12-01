import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoTextareaComponent } from './neo-textarea.component';

describe('NeoTextareaComponent', () => {
  let component: NeoTextareaComponent;
  let fixture: ComponentFixture<NeoTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
