import { Injectable } from '@angular/core';
import { ROUNDED_CLASSES } from '../constants/rounded-class.constant';
import { Color } from '../types/color.type';
import { IThemeConfig } from '../interfaces/theme-config.interface';
import { RoundedType } from '../types/rounded-type.type';

const DEFAULT_THEME_CONFIG: IThemeConfig = {
  roundedType: 'none',
  color: 'lime',
};
@Injectable({
  providedIn: 'root'
})
export class NeoUiService {

  private themeConfig:IThemeConfig = DEFAULT_THEME_CONFIG;  

  updateGlobalTheme(newConfig:Partial<IThemeConfig>):void{
    this.themeConfig = { ...this.themeConfig, ...newConfig };
  }

  setRoundedType(type: 'medium' | 'full' | 'large' | 'small' | 'none' ):void{
    this.themeConfig.roundedType = type;
  }
  
  getRoundedClass(roundedType?:RoundedType):string{
    if(!roundedType){
      return ROUNDED_CLASSES[this.themeConfig.roundedType];
    }
    return ROUNDED_CLASSES[roundedType];      
  }
  
  getRoundedType():RoundedType{
    return  this.themeConfig.roundedType
  }
  
  getColor():Color{
    return this.themeConfig.color;    
  }
  
  private generateBackgroundColorClasses(color:Color){
    return {
        disabledClass: `neo-bg-${color}-200`,
        normalClass: `neo-bg-${color}-300`,
        activeClass: `neo-bg-${color}-400`,
        hoverClass: `hover:neo-bg-${color}-400`
    };
  }
  
  getBackgroundColorClass(color?:Color){
    const resolvedColor = color || this.themeConfig.color;
    return this.generateBackgroundColorClasses(resolvedColor);
  }
}
