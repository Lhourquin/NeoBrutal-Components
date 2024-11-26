import { Color } from "../types/color.type";
import { RoundedType } from "../types/rounded-type.type";
import { WidthType } from "../types/width.type";
export interface IButtonProperties {
    backgroundColor?:Color;
    roundedType?:RoundedType;
    width?:WidthType;
}