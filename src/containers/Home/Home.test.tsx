import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('should render the home container', () => {
    const { getByText } = render(<Home />);
    const textElement = getByText(/This is the home container/i);
    expect(textElement).toBeInTheDocument();
  });
});
