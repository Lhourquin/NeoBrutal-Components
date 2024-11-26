import { NgClass } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';
import { IButtonProperties } from '../../interfaces/button-properties.interface';

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

  @Input() properties:IButtonProperties = {};
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';
  @Input() height: string = 'auto';
  @Input() width: 'small' | 'full' | 'medium' | 'auto'| 'fit' | 'md' = 'md';
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
    const widthClass:any = {
      md: 'neo-max-w-md',
      fit: 'neo-w-fit',
      auto: 'neo-w-auto',
      small: 'neo-min-w-[8rem] neo-w-[12.5rem] maxneo-w-ful',
      medium: 'neo-w-[20rem]',
      full: 'neo-w-full',
    };
   
    const roundedType = this.properties.roundedType && this.roundedType;
    const roundedClass = this.neoUIService.getRoundedClass(roundedType); 
    const backgroundColor = this.properties.backgroundColor && this.backgroundColor;
    const {disabledClass, normalClass, hoverClass} = this.neoUIService.getBackgroundColorClass(backgroundColor); 
    const width = this.width;
    return ` ${roundedClass} ${widthClass[width]} 
    ${
      this.disabled
        ? `${disabledClass}  neo-cursor-not-allowed`
        : `${normalClass} ${hoverClass} neo-cursor-pointer`
    }
  `.trim();
  }
  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  
}