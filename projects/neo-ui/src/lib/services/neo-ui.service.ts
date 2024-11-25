import { Injectable } from '@angular/core';
import { ROUNDED_CLASSES } from '../constants/rounded-class.constant';
import { Color } from '../types/color.type';
import { IThemeConfig } from '../interfaces/theme-config.interface';
import { RoundedType } from '../types/rounded-type.type';
import { IRoundedClass } from '../interfaces/rounded-class.interface';

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
    console.log(this.themeConfig)
    console.log(newConfig)
    this.themeConfig = { ...this.themeConfig, ...newConfig };
    console.log('after')
    console.log(this.themeConfig)
  }

  setRoundedType(type: 'medium' | 'full' | 'large' | 'small' | 'none' ):void{
    this.themeConfig.roundedType = type;
  }
  
  getRoundedClass(roundedType?:RoundedType):string{
    console.log({roundedType})
    console.log({themeConfigRoundedType: this.themeConfig.roundedType})
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

}
