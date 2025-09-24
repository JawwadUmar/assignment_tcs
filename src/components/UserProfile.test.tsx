import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

//Coverage only for loading state
test('renders loading state initially', () => {
  render(<UserProfile userId={1} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

//Missting tests for ->
//Failed fetch
//Successful fetch 
//Re-render

