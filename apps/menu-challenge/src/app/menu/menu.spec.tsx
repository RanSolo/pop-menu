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
  beforeEach(async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => (mockItems),
    });
  })

  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<Menu />);
    await waitFor(() =>expect(baseElement).toBeTruthy());
  }); 

  it('should display fetched item titles', async () => {
    const { baseElement } = render(<Menu />);
    
    await waitFor(() => findByText(baseElement as HTMLElement, 'Mock Title'));
  });

  it('should display all items', async () => {
    const { baseElement } = render(<Menu />);
    
    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(2);
  });
  
  it('should open confirm delete modal', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => findByText(baseElement as HTMLElement, 'Mock Title'));

    userEvent.click(screen.getAllByText('Remove Item')[0]);

    const items = await screen.findAllByText('Delete');
    expect(items).toHaveLength(1);
  });

  it('should delete item', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => findByText(baseElement as HTMLElement, 'Mock Title'));

    userEvent.click(screen.getAllByText('Remove Item')[0]);
    userEvent.click(screen.getByText('Delete'));
 
    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(1);
  });

  it('should create item', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => findByText(baseElement as HTMLElement, 'Add Item'));

    userEvent.click(screen.getByText('Add Item'));
    userEvent.click(screen.getByText('Create'));
 
    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(3);
  });
});
