import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-neo-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-button.component.html',
  styleUrl: './neo-button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeoButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';
  @Input() height: string = 'auto';
  @Input() width: 'small' | 'full' | 'medium' = 'full';
  @Input() backgroundColor: string = '#FF965B';

  get combinedClasses(): string {
    const widthClass = {
      small: 'neo-w-[12.5rem]',
      medium: 'neo-w-[20rem]',
      full: 'neo-w-full',
    };
  const color = this.backgroundColor.toLowerCase(); 
  const disabledClass = `bg-${color}-200`; 
  const normalClass = `bg-${color}-300`; 
  const hoverClass = `hover-bg-${color}-400`;

    console.log(widthClass[this.width]);
    console.log(this.backgroundColor.trim());
    return `
  neo-border-black neo-border-2 neo-p-2.5 neo-rounded-md
  ${widthClass[this.width]}


  ${
    this.disabled
      ? ' neo-cursor-not-allowed'
      : `${normalClass} ${hoverClass} neo-cursor-pointer hover:neo-shadow-[2px_2px_0px_rgba(0,0,0,1)] active:neo-bg-[${this.backgroundColor}-400]`
  }
`;
  }
  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    }
  }
}