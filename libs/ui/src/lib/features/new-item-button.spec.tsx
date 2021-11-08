import { render } from '@testing-library/react';

import NewItemButton from './new-item-button';

describe('button', () => {
  const onAdd = jest.fn()
  it('should render successfully', () => {
    const { baseElement } = render(
    <NewItemButton onAdd={onAdd} />
    );
    expect(baseElement).toBeTruthy();
  });
});
