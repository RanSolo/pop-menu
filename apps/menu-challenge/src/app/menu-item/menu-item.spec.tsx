import { render } from '@testing-library/react';

import MenuItem from './menu-item';
import {MenuItem as IMenuItem} from '@pop-menu/api-interfaces';
import { SetStateAction } from 'react';

describe('MenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuItem item={{}} items={[]} setItems={function(value: SetStateAction<IMenuItem[]>): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(baseElement).toBeTruthy();
  });
});
