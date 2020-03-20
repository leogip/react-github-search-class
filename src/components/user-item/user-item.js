import React from 'react';

function UserItem({ name, avatar, url }) {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img src={avatar} alt={name} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
        </div>
        <div className="card-action">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Go to Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
