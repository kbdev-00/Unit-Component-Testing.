/**
 * ============================================
 * LEVEL 1: BASIC UNIT TESTS
 * ============================================
 * Tests that verify components render correctly
 * and display the right content from props.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../components/Button/Button';

describe('Button Component - Level 1 (Basic Rendering)', () => {
  test('renders without crashing', () => {
    render(<Button label="Click Me" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });

  test('displays the correct label text from props', () => {
    render(<Button label="Submit Form" />);
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  test('applies the primary variant class by default', () => {
    render(<Button label="Primary" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveClass('btn-primary');
  });

  test('applies the secondary variant class when specified', () => {
    render(<Button label="Secondary" variant="secondary" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveClass('btn-secondary');
  });

  test('applies the danger variant class when specified', () => {
    render(<Button label="Delete" variant="danger" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveClass('btn-danger');
  });

  test('renders as disabled when disabled prop is true', () => {
    render(<Button label="Disabled" disabled={true} />);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeDisabled();
  });

  test('renders as enabled when disabled prop is false', () => {
    render(<Button label="Enabled" disabled={false} />);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeEnabled();
  });

  test('has the correct button type attribute', () => {
    render(<Button label="Submit" type="submit" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('defaults to type="button"', () => {
    render(<Button label="Default" />);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('type', 'button');
  });
});

describe('Button Component - Level 2 (Interaction Testing)', () => {
  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    await userEvent.click(screen.getByTestId('custom-button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled={true} />);

    await userEvent.click(screen.getByTestId('custom-button'));

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('calls onClick multiple times on multiple clicks', async () => {
    const handleClick = jest.fn();
    render(<Button label="Multi" onClick={handleClick} />);
    const button = screen.getByTestId('custom-button');

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
