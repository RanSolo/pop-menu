import {
  cleanup,
  getByText,
  findByText,
  render,
  waitFor
} from '@testing-library/react';
import React from 'react';
import App from './app';

describe('App', () => {
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });
  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => [
        {
          id: '1223',
          title: 'Mock Title'
        }
      ]
    });

    const { baseElement } = render(<App />);
    await waitFor(() =>
      getByText(baseElement as HTMLElement, "Welcome to Dylan's Diner!")
    );
    await waitFor(() => {
      findByText(baseElement as HTMLElement, 'Mock Title');
    });
  });
});
