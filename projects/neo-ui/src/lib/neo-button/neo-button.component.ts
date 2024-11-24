import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'NeoButton',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-button.component.html',
  styleUrl: './neo-button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeoButton  implements OnChanges{
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';
  @Input() height: string = 'auto';
  @Input() width: 'small' | 'full' | 'medium' = 'full';
  @Input() backgroundColor: string = 'red';
  @Input() rounded: 'md' | 'full' | 'lg' | 'sm' | 'none' = 'none';
  combinedClassesValue:string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }
  computeCombinedClasses(): string {
    const widthClass = {
      small: 'neo-w-[12.5rem]',
      medium: 'neo-w-[20rem]',
      full: 'neo-w-full',
    };
    const color = this.backgroundColor.toLowerCase(); 
    const disabledClass = `neo-bg-${color}-200`; 
    const normalClass = `neo-bg-${color}-300`; 
    const hoverClass = `hover:neo-bg-${color}-400`;
    
    const roundedClass = `neo-rounded-${this.rounded}`;
    console.log(widthClass[this.width]);
    console.log(this.backgroundColor.trim());
    console.log('Rounded class:', roundedClass);
    return `
  neo-border-2 neo-border-black  neo-p-2.5  
  ${widthClass[this.width]}
  ${
    this.disabled
      ? `${disabledClass} ${roundedClass} neo-cursor-not-allowed`
      : `${normalClass} ${hoverClass} ${roundedClass} neo-cursor-pointer hover:neo-shadow-[2px_2px_0px_rgba(0,0,0,1)] ${hoverClass}`
  }
`.trim();
  }
  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  
}