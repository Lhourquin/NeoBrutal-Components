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
  @Input() width:string = '';
  @Input() height:string = '';
  @Input() backgroundColor:string = '';
  @Input() roundedType:RoundedType = this.neoUIService.getRoundedType();
  combinedClassesValue = '';
  
  ngOnInit(){
    this.combinedClassesValue = this.computeCombinedClasses();

  }
  computeCombinedClasses(): string {
    const widthClass:any = {
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
`.trim();
  }

}
