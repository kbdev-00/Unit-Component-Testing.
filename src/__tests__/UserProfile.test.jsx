/**
 * ============================================
 * LEVEL 3: MOCKING APIs
 * ============================================
 * Tests that verify a component which fetches data.
 * We MOCK the global fetch so tests don't actually
 * hit the internet.
 */

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../components/UserProfile/UserProfile';

// ---- Mock Data ----
const mockUser = {
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  company: {
    name: 'Romaguera-Crona',
  },
};

// ---- Setup & Teardown ----
beforeEach(() => {
  // Reset fetch mock before each test
  global.fetch = jest.fn();
});

afterEach(() => {
  // Restore fetch after each test
  jest.restoreAllMocks();
});

describe('UserProfile Component - Level 3 (API Mocking)', () => {
  test('shows loading spinner initially', () => {
    // Make fetch never resolve so we stay in loading state
    global.fetch.mockImplementation(() => new Promise(() => {}));

    render(<UserProfile userId={1} />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText('Loading user profile...')).toBeInTheDocument();
  });

  test('displays user data after successful fetch', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile userId={1} />);

    // Wait for the user profile to appear
    await waitFor(() => {
      expect(screen.getByTestId('user-profile')).toBeInTheDocument();
    });

    expect(screen.getByTestId('user-name')).toHaveTextContent('Leanne Graham');
    expect(screen.getByTestId('user-email')).toHaveTextContent('Sincere@april.biz');
    expect(screen.getByTestId('user-phone')).toHaveTextContent(
      '1-770-736-8031 x56442'
    );
    expect(screen.getByTestId('user-company')).toHaveTextContent('Romaguera-Crona');
  });

  test('displays first letter of name as avatar', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByTestId('user-avatar')).toHaveTextContent('L');
    });
  });

  test('displays error message when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });

    expect(screen.getByText(/Network error/)).toBeInTheDocument();
  });

  test('displays error message when response is not ok', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    render(<UserProfile userId={999} />);

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });

    expect(screen.getByText(/Failed to fetch user data/)).toBeInTheDocument();
  });

  test('calls fetch with the correct URL using userId prop', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile userId={42} />);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/42'
    );
  });

  test('handles a different user profile correctly', async () => {
    const anotherUser = {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      company: { name: 'Deckow-Crist' },
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => anotherUser,
    });

    render(<UserProfile userId={2} />);

    await waitFor(() => {
      expect(screen.getByTestId('user-name')).toHaveTextContent('Ervin Howell');
    });

    expect(screen.getByTestId('user-email')).toHaveTextContent('Shanna@melissa.tv');
    expect(screen.getByTestId('user-avatar')).toHaveTextContent('E');
  });
});
