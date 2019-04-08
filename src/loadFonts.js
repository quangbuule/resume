import { Font } from '@react-pdf/renderer';

export default function loadFonts() {
  const fonts = [
    ['Lato Regular', require('./fonts/Lato2OFL/Lato-Regular.ttf')],
    ['Lato Light', require('./fonts/Lato2OFL/Lato-Light.ttf')],
    ['Lato Thin', require('./fonts/Lato2OFL/Lato-Thin.ttf')],

    ['Roboto', require('./fonts/Roboto/Roboto-Regular.ttf')],
    ['Roboto Light', require('./fonts/Roboto/Roboto-Light.ttf')],
    ['Roboto Medium', require('./fonts/Roboto/Roboto-Medium.ttf')],
    ['Roboto Bold', require('./fonts/Roboto/Roboto-Bold.ttf')],

    ['Roboto Condensed', require('./fonts/Roboto/RobotoCondensed-Regular.ttf')],
  ];

  fonts.forEach(([family, path]) =>
    Font.register(`${window.location.origin}${path}`, { family })
  );
}
