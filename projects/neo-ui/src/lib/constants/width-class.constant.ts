import { WidthType } from "../types/width.type";
export const WIDTH_CLASS:Record<WidthType, string> = {
    /*
    fit: 'neo-w-fit', // Ajusté au contenu uniquement
    auto: 'neo-w-auto', // Adaptable au contenu ou aux contraintes CSS
    small: ' neo-max-w-full neo-w-[8rem]', // Largeur minimale de 8rem, mais s'adapte au conteneur
    medium: 'neo-w-[20rem] neo-max-w-full', // Largeur de 20rem, mais limitée au parent
    large: 'neo-w-[30rem] neo-max-w-full', // Largeur de 20rem, mais limitée au parent
    full: 'neo-w-full', // Toujours 100% du parent
    */
  fit: 'neo-w-fit', // Ajuste exactement à la largeur du contenu (compact)
  auto: 'neo-w-auto', // Adaptable au contenu ou aux contraintes CSS
  small: 'neo-min-w-[6rem] neo-max-w-[12rem]', // Petit : Minimum 6rem, Maximum 12rem
  medium: 'neo-min-w-[12rem] neo-max-w-[20rem]', // Moyen : Minimum 12rem, Maximum 20rem
  large: 'neo-min-w-[20rem] neo-max-w-[30rem]', // Grand : Minimum 20rem, Maximum 30rem
  full: 'neo-w-full', // Toujours 100% de la largeur disponible du parent
};