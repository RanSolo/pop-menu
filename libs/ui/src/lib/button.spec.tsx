import { render } from '@testing-library/react';

import Button from './button';

describe('button', () => {
  const onClick = jest.fn()
  it('should render successfully', () => {
    const { baseElement } = render(<Button text={'My Button'} onClick={onClick} variable='' />);
    expect(baseElement).toBeTruthy();
  });
});
