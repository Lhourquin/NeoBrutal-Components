import { Component, effect, inject, Input, Pipe } from '@angular/core';
import { NgClass } from '@angular/common';
import { Color } from '../../types/color.type';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';

type BackgroundClasses = {
  disabledClass: string;
  normalClass: string;
  hoverClass: string;
};
interface IButtonTailwindClasses {
  roundedClass: string;
  backgroundClasses: BackgroundClasses;
}
@Component({
  selector: 'NeoDropdownItem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-dropdown-item.component.html',
  styleUrl: './neo-dropdown-item.component.css',
})
export class NeoDropdownItem {
  @Input() item: any;
  @Input() backgroundColor: Color = inject(NeoUiService).getColor();
  @Input() roundedType: RoundedType = inject(NeoUiService).getRoundedType();
  neoUIService = inject(NeoUiService);
  combinedClassesValue: string = '';
  disabled: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(): void {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  computeCombinedClasses(): string {
    const { roundedClass, backgroundClasses } = this.generateTailwindClasses();
    const classesState = this.getClassesState(backgroundClasses);
    return ` ${classesState}
  `.trim();
  }

  getClassesState(backgroundClasses: BackgroundClasses): string {
    const { normalClass, disabledClass, hoverClass } = backgroundClasses;
    return `${
      this.disabled
        ? `${disabledClass}  neo-cursor-not-allowed`
        : `neo-bg-white ${hoverClass} neo-cursor-pointer`
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
}
