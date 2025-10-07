import { render, screen } from '@testing-library/react';
import { MiButton } from '../components/button/Button';


test('renders a button with given text', () => {
  render(<MiButton textButton="Click me" click={() => {}} variant="primary" size="md" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
