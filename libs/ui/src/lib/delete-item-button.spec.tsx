import { render } from '@testing-library/react';

import DeleteItemButton from './delete-item-button';

describe('button', () => {
  const onDelete = jest.fn()
  it('should render successfully', () => {
    const { baseElement } = render(
    <DeleteItemButton text={'My Button'} onDelete={onDelete} />
    );
    expect(baseElement).toBeTruthy();
  });
});
