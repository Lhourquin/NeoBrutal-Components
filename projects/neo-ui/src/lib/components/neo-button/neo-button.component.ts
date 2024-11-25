import { NgClass } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';

@Component({
  selector: 'NeoButton',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-button.component.html',
  styleUrl: './neo-button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeoButton  implements OnChanges, OnInit{
  neoUIService = inject(NeoUiService);
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';
  @Input() height: string = 'auto';
  @Input() width: 'small' | 'full' | 'medium' = 'medium';
  @Input() backgroundColor: Color = inject(NeoUiService).getColor();
  @Input() roundedType: RoundedType = inject(NeoUiService).getRoundedType();


  combinedClassesValue:string = '';

  ngOnInit(): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.combinedClassesValue = this.computeCombinedClasses();

  }
  computeCombinedClasses(): string {
    const widthClass = {
      small: 'neo-w-[12.5rem]',
      medium: 'neo-w-[20rem]',
      full: 'neo-w-full',
    };
   
    const roundedClass = this.neoUIService.getRoundedClass(this.roundedType);
    const color = this.backgroundColor; 
    const disabledClass = `neo-bg-${color}-200`; 
    const normalClass = `neo-bg-${color}-300`; 
    const hoverClass = `hover:neo-bg-${color}-400`;
    return ` ${roundedClass} ${widthClass[this.width]} 
  ${
    this.disabled
      ? `${disabledClass}  neo-cursor-not-allowed`
      : `${normalClass} ${hoverClass} neo-cursor-pointer ${hoverClass}`
  }
`.trim();
  }
  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  
}