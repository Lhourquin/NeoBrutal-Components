import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'NeoOption',
  standalone: true,
  imports: [],
  templateUrl: './neo-option.component.html',
  styleUrl: './neo-option.component.css',
})
export class NeoOption {
  @Input() value: any;
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Output() optionSelected = new EventEmitter<any>();

  selectOption() {
    this.optionSelected.emit(this.value);
  }
}
