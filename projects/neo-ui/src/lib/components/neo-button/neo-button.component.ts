import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';
import { IButtonProperties } from '../../interfaces/button-properties.interface';
import { WidthType } from '../../types/width.type';
import { WIDTH_CLASS } from '../../constants/width-class.constant';

type BackgoundClasses = {
  disabledClass: string;
  normalClass: string;
  hoverClass: string;
};
interface IButtonTailwindClasses {
  roundedClass: string;
  backgroundClasses: BackgoundClasses;
}
@Component({
  selector: 'NeoButton',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-button.component.html',
  styleUrl: './neo-button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeoButton implements OnChanges, OnInit {
  neoUIService = inject(NeoUiService);
  @Input() properties: IButtonProperties = {};
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() height: string = 'auto';
  @Input() width: WidthType = 'small';
  @Input() backgroundColor: Color = inject(NeoUiService).getColor();
  @Input() roundedType: RoundedType = inject(NeoUiService).getRoundedType();
  combinedClassesValue: string = '';

  ngOnInit(): void {
    this.resolveProperties();
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  computeCombinedClasses(): string {
    const { roundedClass, backgroundClasses } = this.generateTailwindClasses();
    const classesState = this.getClassesState(backgroundClasses);
    return `${roundedClass} ${WIDTH_CLASS[this.width]} ${classesState}
  `.trim();
  }

  getClassesState(backgroundClasses: BackgoundClasses): string {
    const { normalClass, disabledClass, hoverClass } = backgroundClasses;
    return `${
      this.disabled
        ? `${disabledClass}  neo-cursor-not-allowed`
        : `${normalClass} ${hoverClass} neo-cursor-pointer`
    }`.trim();
  }

  generateTailwindClasses(): IButtonTailwindClasses {
    const roundedClass = this.neoUIService.getRoundedClass(this.roundedType);
    const { disabledClass, normalClass, hoverClass } =
      this.neoUIService.getBackgroundColorClass(this.backgroundColor);
    return {
      roundedClass,
      backgroundClasses: {
        disabledClass,
        normalClass,
        hoverClass,
      },
    };
  }

  resolveProperties(): void {
    this.roundedType = this.neoUIService.resolveProperty(
      this.properties.roundedType,
      this.roundedType,
    );
    this.backgroundColor = this.neoUIService.resolveProperty(
      this.properties.backgroundColor,
      this.backgroundColor,
    );
    this.width = this.neoUIService.resolveProperty(
      this.properties.width,
      this.width,
    );
  }

  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    }
  }
}
