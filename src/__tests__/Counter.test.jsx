/**
 * ============================================
 * LEVEL 2: INTERACTION TESTING
 * ============================================
 * Tests that verify user interactions with the
 * Counter component — clicks, state changes, etc.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from '../components/Counter/Counter';

describe('Counter Component - Level 1 (Basic Rendering)', () => {
  test('renders without crashing', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('displays the initial count of 0 by default', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('displays a custom initial count', () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('renders increment, decrement, and reset buttons', () => {
    render(<Counter />);
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    expect(screen.getByTestId('reset-btn')).toBeInTheDocument();
  });
});

describe('Counter Component - Level 2 (Interaction Testing)', () => {
  test('increments count by 1 when increment button is clicked', async () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');

    await userEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('decrements count by 1 when decrement button is clicked', async () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');

    await userEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });

  test('resets count to initial value when reset button is clicked', async () => {
    render(<Counter initialCount={5} />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const resetBtn = screen.getByTestId('reset-btn');

    // Increment a few times
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('8');

    // Reset
    await userEvent.click(resetBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
  });

  test('increments by custom step value', async () => {
    render(<Counter step={5} />);
    const incrementBtn = screen.getByTestId('increment-btn');

    await userEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
  });

  test('decrements by custom step value', async () => {
    render(<Counter step={3} />);
    const decrementBtn = screen.getByTestId('decrement-btn');

    await userEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('-3');
  });

  test('handles multiple clicks correctly', async () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');

    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
  });

  test('can go from negative back to positive', async () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const decrementBtn = screen.getByTestId('decrement-btn');

    // Go negative
    await userEvent.click(decrementBtn);
    await userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('-2');

    // Come back to positive
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });
});
