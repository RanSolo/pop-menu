import { render } from '@testing-library/react';

import Input from './input';

describe('input', () => {
  const onChange = jest.fn()
  it('should render successfully', () => {
    const { baseElement } = render(
  <Input 
        label={'Title'}
        name={'title'}
        value={''}
        onChange={onChange}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
