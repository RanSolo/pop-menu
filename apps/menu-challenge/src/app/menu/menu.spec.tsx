import {
  cleanup,
  findByText,
  render,
  waitFor,
  screen
} from '@testing-library/react';
import Menu from './menu';
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

describe('Menu', () => {
  beforeEach(async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => mockItems
    });
  });

  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  it('should display fetched item titles', async () => {
    const { baseElement } = render(<Menu />);
    const items = await screen.findAllByText('Mock Title');
    await waitFor(() => {
      expect(items).toHaveLength(1);
    });
  });

  it('should display all items', async () => {
    const { baseElement } = render(<Menu />);

    const items = await screen.findAllByText('Remove Item');
    await waitFor(() => {
      expect(items).toHaveLength(2);
    });
  });

  it('should confirm and delete', async () => {
    const { baseElement } = render(<Menu />);
    const removeBtns = await screen.findAllByText('Remove Item');

    userEvent.click(removeBtns[0]);

    const deleteButton = await screen.findByText('Delete');
    await waitFor(() => {
      expect(deleteButton).toBeTruthy();
    });
    userEvent.click(deleteButton);
    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(1);
  });

  it('should create item', async () => {
    const { baseElement } = render(<Menu />);

    await waitFor(() => {
      findByText(baseElement as HTMLElement, 'Add Item');
    });

    userEvent.click(screen.getByText('Add Item'));
    userEvent.click(screen.getByText('Add'));

    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(3);
  });

  it('have inline editability', async () => {
    const { baseElement } = render(<Menu />);

    const editBtn = await screen.findByRole('button', { label: 'edit-btn' });

    userEvent.click(editBtn);
    userEvent.click(await screen.findByText('Add'));

    const items = await screen.findAllByText('Remove Item');
    expect(items).toHaveLength(3);
  });
});
