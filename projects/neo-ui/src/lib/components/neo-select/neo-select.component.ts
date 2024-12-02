import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'NeoSelect',
  templateUrl: './neo-select.component.html',
  styleUrls: ['./neo-select.component.css'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NeoSelect),
      multi: true,
    },
  ],
})
export class NeoSelect implements ControlValueAccessor {
  @Input() options: any = [];
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() label: string = '';

  @Input() multiSelect: boolean = false;
  @Input() placeholder: string = 'Sélectionnez une option';
  @Output() selectionChange = new EventEmitter<any>();

  selectedValues: any[] = [];
  selectedValue: string = '';
  isOpen: boolean = false;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  onSelectionChange(event) {}
  selectOption(option: any) {
    //let value = selectedValues.map((v) => v.label).join(', ')

    /*
    if (this.multiSelect) {
      const index = this.selectedValues.findIndex(
        (item) => item.id === option.id,
      );
      if (index > -1) {
        this.selectedValues.splice(index, 1);
      } else {
        this.selectedValue = option;
      }
    } else {
      this.selectedValues = [option];
      console.log(this.selectedValues);
      this.isOpen = false;
    }
    */
    this.onChange(this.selectedValues);
    this.selectionChange.emit(this.selectedValues);
  }

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
