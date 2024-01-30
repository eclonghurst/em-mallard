import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import React from 'react';
import profileSvg from '../images/profile_photo.svg';

interface Post {
  title: string;
  body: string;
}

interface User {
  name: string;
  email: string;
  posts: Post[];
}

export const GET_USERS_DATA_QUERY = gql`
  query getUsersName {
    users {
      id
      name
      email
      posts {
        title
        body
      }
    }
  }
`;

export default function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS_DATA_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.users) return <p>No data</p>;

  return (
    <React.Fragment>
      {data.users.map(({ name, email, posts }: User) => (
        <div key={name} className="user-container">
          <h2>{name}</h2>
          <img src={profileSvg} className="profile-svg" width="100px" alt="" />
          <h3 className="email">@: {email}</h3>
          <div className="posts">
            <h3>Posts:</h3>
            {posts.map((post, index) => (
              <div key={index}>
                <h4>- {post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
