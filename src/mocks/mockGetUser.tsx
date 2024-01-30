import GET_USERS_DATA_QUERY from '../queries/GET_USERS_DATA_QUERY';

export const mockGetUser = [
  {
    request: {
      query: GET_USERS_DATA_QUERY,
      variables: {},
    },
    result: {
      data: {
        users: [
          {
            name: 'Joe Bloggs',
            email: 'JoeBloggs@example.com',
            posts: [
              { title: 'First post', body: 'This is my first ever post!' },
            ],
          },
          {
            name: 'Mariah Carey',
            email: 'MariahCarey@example.com',
            posts: [
              {
                title: 'Christmas Hits',
                body: 'All I want for Christmas',
              },
              {
                title: 'Christmas Hits 2',
                body: 'Is you',
              },
            ],
          },
        ],
      },
    },
  },
];
