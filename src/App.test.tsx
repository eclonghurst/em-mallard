import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import DisplayUsers, {
  GET_USERS_DATA_QUERY,
} from './queries/GET_USERS_DATA_QUERY';
import { MockedProvider } from '@apollo/client/testing';
import { Header } from './contentChef/contentChef';

const mockGetUser = [
  {
    request: {
      query: GET_USERS_DATA_QUERY,
      variables: {},
    },
    result: {
      data: {
        users: [
          {
            id: 1,
            name: 'Joe Bloggs',
            email: 'JoeBloggs@example.com',
            posts: [
              {
                title: 'First post',
                body: 'This is my first ever post!',
              },
            ],
          },
          {
            id: 2,
            name: 'Mariah Carey',
            email: 'MariahCarey@example.com',
            posts: [
              {
                title: 'Christmas Hits',
                body: 'All I want for Christmas',
              },
              { title: 'Christmas Hits 2', body: 'Is you' },
            ],
          },
        ],
      },
    },
  },
];

describe('header', function () {
  render(<App />);
  const header = screen.getByRole('banner');

  it('should exist in App', () => {
    expect(header).toBeInTheDocument();
  });

  it('should contain the text Hello World!', async () => {
    render(<Header />);
    await waitFor(() => {
      expect(screen.getByRole('banner')).toHaveTextContent('Hello World!');
    });
  });
});

describe('users-body', function () {
  // const name = screen.getByRole('heading', { level: 2 });

  it('should render without error', async () => {
    render(
      <MockedProvider mocks={mockGetUser} addTypename={false}>
        <DisplayUsers />
      </MockedProvider>
    );
    expect(await screen.findByText('Loading ...')).toBeInTheDocument();
  });

  it('should display user name', async () => {
    render(
      <MockedProvider mocks={mockGetUser} addTypename={false}>
        <DisplayUsers />
      </MockedProvider>
    );
    expect(await screen.findByText('Joe Bloggs')).toBeInTheDocument();
  });

  it('should display user email', async () => {
    render(
      <MockedProvider mocks={mockGetUser} addTypename={false}>
        <DisplayUsers />
      </MockedProvider>
    );
    expect(
      await screen.findByText('@: MariahCarey@example.com')
    ).toBeInTheDocument();
  });
});
