import { themeFromSourceColor } from '@material/material-color-utilities';

import { useLayoutEffect, useState } from 'react';
import { TonalPaletteDefault } from '../types/TonalPalette';

export const TONAL_PALETTE_KEY = 'TonalPaletteKey';

const LEVELS = [
  0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95,
  96, 98, 99, 100,
];

export const useTonalPalette = () => {
  const [tonalPalette, setTonalPalette] = useState(TonalPaletteDefault);

  useLayoutEffect(() => {
    if (localStorage.getItem(TONAL_PALETTE_KEY)) {
      const localTonalPalette = JSON.parse(
        localStorage.getItem(TONAL_PALETTE_KEY) || '{}'
      );
      setTonalPalette(localTonalPalette);
    }
  }, []);

  const generatePalette = (hexColor) => {
    const intColor = hexColor;
    const { palettes } = themeFromSourceColor(intColor);
    const tones = {};

    for (const [key, palette] of Object.entries(palettes)) {
      const tonelevel = {};
      for (const level of LEVELS) {
        tonelevel[level] = palette.tone(level);
      }
      tones[key] = tonelevel;
    }

    setTonalPalette(tones);
    localStorage.setItem(TONAL_PALETTE_KEY, JSON.stringify(tones));
  };

  /*
      const setDefaultPalette = () => {
          generatePalette('#6750A4');
      }*/

  return [tonalPalette, generatePalette];
};
