import { NgClass } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';

@Component({
  selector: 'lib-neo-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-card.component.html',
  styleUrl: './neo-card.component.css'
})
export class NeoCardComponent implements OnInit {
  neoUIService = inject(NeoUiService);
  @Input() width:string = 'fit';
  @Input() height:string = '';
  @Input() position:string = '';
  @Input() backgroundColor:string = '';
  @Input() roundedType:RoundedType = this.neoUIService.getRoundedType();
  combinedClassesValue = '';
  
  ngOnInit(){
    this.combinedClassesValue = this.computeCombinedClasses();

  }
  computeCombinedClasses(): string {
    const widthClass:any = {
      fit:'neo-size-fit',
      small: 'neo-w-[12.5rem]',
      //medium: 'neo-size-24',
      medium: 'neo-max-w-60',
      full: 'neo-w-full',
    };
    const roundedClass = this.neoUIService.getRoundedClass(this.roundedType);
    return `${this.position} ${roundedClass} ${widthClass[this.width]} 
  `.trim();
  }

}
