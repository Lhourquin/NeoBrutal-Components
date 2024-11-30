import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  inject,
  OnInit,
  ContentChild,
  TemplateRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';
@Component({
  selector: 'NeoInput',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './neo-input.component.html',
  styleUrl: './neo-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NeoInput),
      multi: true,
    },
  ],
})
export class NeoInput implements OnInit, OnChanges, ControlValueAccessor {
  private disabled: boolean = false;
  combinedClassesValue: string = '';
  value = '';

  neoUIService = inject(NeoUiService);
  @ContentChild('prefix') prefixTemplate?: TemplateRef<any>;
  @ContentChild('suffix') suffixTemplate?: TemplateRef<any>;
  @Input() placeholder = '';
  @Input() label: string = '';
  @Input() type = '';
  @Input() id = '';
  @Input() name = '';
  @Input() backgroundColor: Color = this.neoUIService.getColor();
  @Input() roundedType: RoundedType = this.neoUIService.getRoundedType();
  @Input() required: boolean = false;
  @Input() error?: string = '';
  @Input() success?: string = '';
  @Input() helperText?: string = '';

  ngOnInit(): void {
    if (this.isDisabled) {
      this.setDisabledState(this.isDisabled);
    }
    this.combinedClassesValue = this.computeCombinedClasses();
    console.log(this.isDisabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isDisabled']) {
      this.setDisabledState(this.isDisabled);
    }
    this.combinedClassesValue = this.computeCombinedClasses();
  }
  get isDisabled(): boolean {
    return this.disabled;
  }

  writeValue(value: any): void {
    //angular call that function and change the value when the value change on the binded FormControl
    this.value = value; //angular update the value, writeValue is called automatically by angular
  }

  //registerOnChange and registerOnTouched are callback function passed by angular to our component, these functions allow angular to
  //react at change of the value or with interaction like "touched"
  //there are callback function binded to our function onTouched and onChange
  registerOnChange(fn: any): void {
    this.onChange = fn; //pass the function to notify changement
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; //pass the function to notify if is touched
  }

  //onChange and onTouched are the function we need to call to notify angular the change of input or if it is touched
  onChange(value: any) {}

  onTouched() {}

  setDisabledState(isDisabled: boolean): void {
    // Optionnel, gère l'état désactivé en modifiant l'attribut disabled de l'input
    this.disabled = isDisabled;
    // Recalculer les classes quand l'état change
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  onInputChange(event: Event): void {
    if (this.disabled) return;

    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  onBlur() {
    this.onTouched();
  }

  computeCombinedClasses(): string {
    const roundedClass = this.neoUIService.getRoundedClass(this.roundedType);
    const bgColor = this.neoUIService.getBackgroundColorClass(
      this.backgroundColor,
    );
    const classesState = this.getClassesState(bgColor);
    return `${classesState} ${roundedClass}
  `.trim();
  }

  getClassesState(backgroundClasses: any): string {
    const { hoverClass, disabledClass, focusClass } = backgroundClasses;
    console.log(focusClass);
    return `${
      this.isDisabled
        ? `neo-cursor-not-allowed`
        : `${focusClass} neo-cursor-pointer`
    }`.trim();
  }
}
