import { cleanup, queryByText, findByText, render, waitFor, screen, act } from '@testing-library/react';
import Menu from './menu';
import userEvent from '@testing-library/user-event';

const mockItems = [{
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
  }]

describe('Menu', () => {
  beforeEach(() => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ([{
        title: 'Mock Title',
      }]),
    });
  })

  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Menu />);
    expect(baseElement).toBeTruthy();
  }); 
 
  it('should display fetched items titles', async () => {
    const { baseElement } = render(<Menu />);
    await waitFor(() => findByText(baseElement as HTMLElement, 'Mock Title'));
  });
  
  it('should not display deleted items titles', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => findByText(baseElement as HTMLElement, 'Mock Title'));
 
    act(() => userEvent.click(screen.getByText('Remove Item')));
 
    const items = await screen.findAllByText('Remove Item');

    expect(items).toHaveLength(1);
  });
});
