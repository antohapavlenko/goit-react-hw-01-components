import React from 'react';
import FriendItem from './FriendItem';

export default function FriendList({ friendsData }) {
  return (
    <ul style={{backgroundColor: 'rgb(255, 255, 255)', margin: '0', padding: '10px 10px'}}>
      <FriendItem friends={friendsData}/>
    </ul>
  );
}
