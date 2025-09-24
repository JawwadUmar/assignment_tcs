import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders loading state initially', () => {
  render(<UserProfile userId={1} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

