/**
 * ============================================
 * LEVEL 1: BASIC UNIT TESTS
 * ============================================
 * Tests that verify the Card component renders
 * correctly with various prop combinations.
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card/Card';

describe('Card Component - Level 1 (Basic Rendering)', () => {
  test('renders without crashing', () => {
    render(<Card title="Test Card" />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('displays the correct title from props', () => {
    render(<Card title="My Awesome Card" />);
    expect(screen.getByTestId('card-title')).toHaveTextContent('My Awesome Card');
  });

  test('displays the description when provided', () => {
    render(<Card title="Card" description="This is a description" />);
    expect(screen.getByTestId('card-description')).toHaveTextContent(
      'This is a description'
    );
  });

  test('does not render description when not provided', () => {
    render(<Card title="Card" />);
    expect(screen.queryByTestId('card-description')).not.toBeInTheDocument();
  });

  test('renders image when imageUrl is provided', () => {
    render(<Card title="Card" imageUrl="https://example.com/img.jpg" />);
    const image = screen.getByTestId('card-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/img.jpg');
  });

  test('does not render image when imageUrl is not provided', () => {
    render(<Card title="Card" />);
    expect(screen.queryByTestId('card-image')).not.toBeInTheDocument();
  });

  test('renders footer when provided', () => {
    render(<Card title="Card" footer="Footer text here" />);
    expect(screen.getByTestId('card-footer')).toHaveTextContent('Footer text here');
  });

  test('does not render footer when not provided', () => {
    render(<Card title="Card" />);
    expect(screen.queryByTestId('card-footer')).not.toBeInTheDocument();
  });

  test('image has correct alt text matching the title', () => {
    render(<Card title="Nature" imageUrl="https://example.com/nature.jpg" />);
    const image = screen.getByAltText('Nature');
    expect(image).toBeInTheDocument();
  });
});
