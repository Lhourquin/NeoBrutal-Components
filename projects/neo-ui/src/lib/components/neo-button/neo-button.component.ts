import { NgClass } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';
import { IButtonProperties } from '../../interfaces/button-properties.interface';
import { WidthType } from '../../types/width.type';
import { WIDTH_CLASS } from '../../constants/width-class.constant';
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
  //@Input() additionalClasses: string = '';
  @Input() height: string = 'auto';
  @Input() width: WidthType = 'small';
  @Input() backgroundColor: Color = inject(NeoUiService).getColor();
  @Input() roundedType: RoundedType = inject(NeoUiService).getRoundedType();
  @Input() id = '';
  count = 0;
  combinedClassesValue:string = '';

  ngOnInit(): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.count++;
    console.group("changement for :", this.id, " number of changement: ", this.count);
    console.log(changes)

    console.groupEnd()
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  computeCombinedClasses(): string {
    const roundedType:RoundedType = this.neoUIService.resolveProperty(
      this.properties.roundedType, this.roundedType
    );
    const roundedClass= this.neoUIService.getRoundedClass(roundedType); 
    const backgroundColor:Color = this.neoUIService.resolveProperty(
      this.properties.backgroundColor , this.backgroundColor
    );
    const {disabledClass, normalClass, hoverClass} = this.neoUIService.getBackgroundColorClass(backgroundColor); 
    const width:WidthType = this.neoUIService.resolveProperty(this.properties.width, this.width);
    return ` ${roundedClass} ${WIDTH_CLASS[width]} 
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