import * as React from 'react';

export type MenuItem = {
  [name: string]: string | number | unknown;
  id?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  price?: number;
};

export type EditControls = {
  [controlName: string]: boolean;
  titleControl: boolean;
  imageUrlControl: boolean;
  descriptionControl: boolean;
  priceControl: boolean;
};

export type OnClick = {
  [index: string]: string | MenuItem | EditControls;
  (event?: React.MouseEvent<Element, MouseEvent>, name?: keyof MenuItem): void;
};
