/**
 * ============================================
 * LEVEL 1 + LEVEL 2: BASIC + INTERACTION TESTS
 * ============================================
 * Tests that verify the InputField renders correctly
 * AND responds to user typing (interaction testing).
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InputField from '../components/InputField/InputField';

describe('InputField Component - Level 1 (Basic Rendering)', () => {
  test('renders without crashing', () => {
    render(<InputField label="Name" value="" onChange={() => {}} />);
    const input = screen.getByTestId('input-field');
    expect(input).toBeInTheDocument();
  });

  test('displays the correct label', () => {
    render(<InputField label="Email Address" value="" onChange={() => {}} />);
    expect(screen.getByTestId('input-label')).toHaveTextContent('Email Address');
  });

  test('renders with the correct placeholder text', () => {
    render(
      <InputField
        label="Name"
        value=""
        onChange={() => {}}
        placeholder="Enter your name"
      />
    );
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  test('renders error message when error prop is provided', () => {
    render(
      <InputField
        label="Email"
        value=""
        onChange={() => {}}
        error="Email is required"
      />
    );
    expect(screen.getByTestId('input-error')).toHaveTextContent('Email is required');
  });

  test('does not render error message when no error', () => {
    render(<InputField label="Email" value="" onChange={() => {}} />);
    expect(screen.queryByTestId('input-error')).not.toBeInTheDocument();
  });

  test('error message has role="alert" for accessibility', () => {
    render(
      <InputField
        label="Email"
        value=""
        onChange={() => {}}
        error="Invalid email"
      />
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('applies error class when error is present', () => {
    render(
      <InputField
        label="Email"
        value=""
        onChange={() => {}}
        error="Required"
      />
    );
    const input = screen.getByTestId('input-field');
    expect(input).toHaveClass('input-error');
  });
});

describe('InputField Component - Level 2 (Interaction Testing)', () => {
  test('calls onChange handler when user types', async () => {
    const handleChange = jest.fn();
    render(
      <InputField label="Name" value="" onChange={handleChange} />
    );

    const input = screen.getByTestId('input-field');
    await userEvent.type(input, 'John');

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(4); // J, o, h, n
  });

  test('displays the correct value from props (controlled input)', () => {
    render(
      <InputField label="Name" value="Jane Doe" onChange={() => {}} />
    );
    const input = screen.getByTestId('input-field');
    expect(input).toHaveValue('Jane Doe');
  });

  test('handles different input types correctly', () => {
    render(
      <InputField
        label="Password"
        value=""
        onChange={() => {}}
        type="password"
      />
    );
    const input = screen.getByTestId('input-field');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('input is connected to label via htmlFor', () => {
    render(
      <InputField label="Username" value="" onChange={() => {}} />
    );
    const label = screen.getByTestId('input-label');
    const input = screen.getByTestId('input-field');
    expect(label).toHaveAttribute('for', 'username');
    expect(input).toHaveAttribute('id', 'username');
  });
});
