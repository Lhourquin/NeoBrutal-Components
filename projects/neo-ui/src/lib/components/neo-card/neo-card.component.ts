import { NgClass } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges,ViewEncapsulation } from '@angular/core';
import { NeoUiService } from '../../services/neo-ui.service';
import { RoundedType } from '../../types/rounded-type.type';
import { WIDTH_CLASS } from '../../constants/width-class.constant';
import { WidthType } from '../../types/width.type';
import { HEIGHT_CLASS } from '../../constants/height-class.constant';
import { HeightType } from '../../types/height.type';

@Component({
  selector: 'NeoCard',
  standalone: true,
  imports: [NgClass],
  templateUrl: './neo-card.component.html',
  styleUrl: './neo-card.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class NeoCard implements OnChanges ,OnInit {
  neoUIService = inject(NeoUiService);
  @Input() width:WidthType = 'fit';
  @Input() height:HeightType = 'full';
  @Input() position:string = '';
  @Input() backgroundColor:string = '';
  @Input() roundedType: RoundedType = this.neoUIService.getRoundedType();
  combinedClassesValue = '';
  
  ngOnInit(){
    this.combinedClassesValue = this.computeCombinedClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.combinedClassesValue = this.computeCombinedClasses();
    console.log(this.roundedType)
  }
  computeCombinedClasses(): string {
    const roundedClass = this.neoUIService.getRoundedClass(this.roundedType);
    return `${this.position} ${roundedClass} ${WIDTH_CLASS[this.width]} ${HEIGHT_CLASS[this.height]} 
  `.trim();
  }

}
