import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { Color } from '../../types/color.type';
@Component({
  selector: 'NeoCard',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-card.component.html',
  styleUrl: './neo-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NeoCard implements OnChanges, OnInit {
  neoUIService = inject(NeoUiService);
  @Input() backgroundColor: Color = 'none';
  @Input() roundedType: RoundedType = this.neoUIService.getRoundedType();
  @Input() disabled: boolean = false;
  @Input() imgSrc: string = '';
  combinedClassesValue = '';

  ngOnInit() {
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.combinedClassesValue = this.computeCombinedClasses();
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
    const { normalClass, disabledClass, hoverClass } = backgroundClasses;
    return `${
      this.disabled
        ? `${disabledClass}  neo-cursor-not-allowed`
        : `${normalClass} ${hoverClass} `
    }`.trim();
  }
  //neo-cursor-pointer
}
