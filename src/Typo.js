import React from 'react';
import { Text as PDFText } from '@react-pdf/renderer';

export function Text({ weight, style, ...otherProps }) {
  const fontFamily = (() => {
    switch (weight) {
      case 'Thin':
        return 'Roboto Thin';

      case 'light':
        return 'Roboto Light';

      case 'bold':
        return 'Roboto Bold';

      default:
        return 'Roboto';
    }
  })();

  return <PDFText style={{ fontFamily, ...style }} {...otherProps} />;
}

export function Heading({ style, ...otherProps }) {
  return (
    <PDFText
      style={{
        fontSize: 14,
        fontFamily: 'Roboto Condensed',
        letterSpacing: 2,
        textTransform: 'uppercase',
        ...style,
      }}
      {...otherProps}
    />
  );
}
