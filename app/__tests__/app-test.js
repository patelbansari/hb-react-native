import React from 'react';
import App from '../src/App';
import { render } from '@testing-library/react-native';

describe("renders correctly ", () => {
  test(("Should display correct title for product screen"), async () => {
    const app = render(<App />);
    const productTitle = app.getByTestId('productTitle');
    expect(productTitle.props.children).toBe('Our Products');
  });
  test(("Snapshot app component"), async () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});