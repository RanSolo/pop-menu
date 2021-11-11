import { render, screen, toBeTruthy } from '@testing-library/react';

import MenuItem from './menu-item';
import { MenuItem as IMenuItem } from '@pop-menu/api-interfaces';
import { SetStateAction } from 'react';
import userEvent from '@testing-library/user-event';
const mockItems = [
  {
    id: '1231',
    imageUrl: '',
    title: 'Mock Title',
    description: ' Fake item description',
    price: 10
  },
  {
    id: '0000',
    imageUrl: '',
    title: 'Mock Title 2',
    description: 'Fake item description 2',
    price: 10
  }
];
describe('MenuItem', () => {
  const setItems = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuItem item={mockItems[0]} items={mockItems} setItems={setItems} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('have inline editability', async () => {
    const { baseElement } = render(
      <MenuItem item={mockItems[0]} items={mockItems} setItems={setItems} />
    );

    const editBtn = await screen.findAllByRole('button', { label: 'edit-btn' });

    userEvent.click(editBtn[1]);

    const items = await screen.findByDisplayValue('Mock Title');
    expect(items).toBeTruthy();

    const value = '';
    userEvent.click(editBtn[1]);
  });
});
