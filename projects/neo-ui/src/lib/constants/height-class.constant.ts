import { HeightType } from "../types/height.type";
export const HEIGHT_CLASS: Record<HeightType, string> = {
  fit: 'neo-h-fit', // Ajusté strictement à la hauteur du contenu
  auto: 'neo-h-auto', // Hauteur déterminée automatiquement par le contenu ou le parent
  small: 'neo-min-h-[12rem] neo-max-h-[4rem]', // Petit : Minimum 2rem, Maximum 4rem
  medium: 'neo-min-h-[14rem] neo-max-h-[6rem]', // Moyen : Minimum 4rem, Maximum 6rem
  large: 'neo-min-h-[26rem] neo-max-h-[38rem]', // Grand : Minimum 6rem, Maximum 8rem
  full: 'neo-h-full', // Prend 100% de la hauteur disponible du conteneur
};