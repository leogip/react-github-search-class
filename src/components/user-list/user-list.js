import React from 'react';
import UserItem from '../user-item/user-item';

function UserList({ users }) {
  const userList = users.map(user => {
    const { id, ...userProps } = user;

    return <UserItem key={id} {...userProps} />;
  });

  return <div className="row">{users.length !== 0 && userList}</div>;
}

export default UserList;
