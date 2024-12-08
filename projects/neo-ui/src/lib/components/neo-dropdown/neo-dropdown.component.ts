import { NgClass } from '@angular/common';
import {
  ElementRef,
  HostListener,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  effect,
  OnInit,
  OnChanges,
} from '@angular/core';
import { NeoInput } from '../neo-input/neo-input.component';
import { NeoDropdownService } from '../../services/neo-dropdown.service';
import { v4 as uuidv4 } from 'uuid';
import { NeoUiService } from '../../services/neo-ui.service';
import { Color } from '../../types/color.type';
import { RoundedType } from '../../types/rounded-type.type';
import { NeoDropdownItem } from '../neo-dropdown-item/neo-dropdown-item.component';
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
  selector: 'NeoDropdown',
  standalone: true,
  imports: [NgClass, NeoInput, NeoDropdownItem],
  templateUrl: './neo-dropdown.component.html',
  styleUrl: './neo-dropdown.component.css',
})
export class NeoDropdown implements OnInit, OnChanges {
  elementRef = inject(ElementRef);
  neoDropdownService = inject(NeoDropdownService);
  openDropdownId = this.neoDropdownService.openDropdownId();
  neoUIService = inject(NeoUiService);
  dropdownId: string = uuidv4();
  inputId: string = uuidv4();
  searchValue: string = '';
  combinedClassesValue: string = '';
  isOpen: boolean = false;
  disabled: boolean = false;
  closable: boolean = true;
  @Input() hasBorder: boolean = true;
  @Input() relative: boolean = false;
  @Input() hasShadow: boolean = true;
  @Input() searchable: boolean = false;
  @Input() multiSelect: boolean = false;
  @Input() backgroundColor: Color = inject(NeoUiService).getColor();
  @Input() roundedType: RoundedType = inject(NeoUiService).getRoundedType();
  @Input() align: 'right' | 'left' = 'left';
  @Input() label: string = '';
  @Output() searchChange = new EventEmitter<string>();

  constructor() {
    effect(() => {
      const openId = this.neoDropdownService.openDropdownId();
      if (openId !== this.dropdownId && this.isOpen) {
        this.isOpen = false;
      }
    });
  }
  ngOnInit(): void {
    if (this.multiSelect) {
      this.closable = false;
    }
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(): void {
    if (this.multiSelect) {
      this.closable = false;
    }
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  computeCombinedClasses(): string {
    const { roundedClass, backgroundClasses } = this.generateTailwindClasses();
    const classesState = this.getClassesState(backgroundClasses);
    return `${roundedClass}  ${classesState}
  `.trim();
  }

  getClassesState(backgroundClasses: BackgroundClasses): string {
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.isOpen = false;
      this.neoDropdownService.setOpenDropdownId(undefined);
    }
  }
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.neoDropdownService.setOpenDropdownId(this.dropdownId);
    } else {
      this.neoDropdownService.setOpenDropdownId(undefined);
    }
  }
  closeDropdown(event: Event) {
    event.stopPropagation();
    if (this.closable) {
      this.isOpen = false;
      this.neoDropdownService.setOpenDropdownId(undefined);
    }
  }
  onSearch(event: Event): void {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.searchChange.emit(this.searchValue);
  }
}
