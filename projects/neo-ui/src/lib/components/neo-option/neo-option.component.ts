import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'NeoOption',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-option.component.html',
  styleUrl: './neo-option.component.css',
})
export class NeoOption implements ControlValueAccessor {
  @Input() value: any;
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Input() combinedClassesValue: string = '';
  @Output() optionSelected = new EventEmitter<any>();
  selectedValues: string = '';
  selectOption() {
    console.log(this.value);
    this.optionSelected.emit(this.value);
  }

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectedValues = value || [];
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
