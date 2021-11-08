import * as React from 'react';

export interface MenuItem {
  id?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  price?: number;
}

export interface OnClick {
  (
    event?: React.MouseEvent<Element, MouseEvent>, 
    variable?: string
  ): void
}
