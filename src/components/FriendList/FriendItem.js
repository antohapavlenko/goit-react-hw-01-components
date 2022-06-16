import s from './FriendItem.module.css';

export default function FriendItem({ friends }) {
  return friends.map(friend => (
    <li className={s.item} key={friend.id}>
      {friend.isOnline ? (
        <span className={s.status} style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span className={s.status} style={{ backgroundColor: 'red' }}></span>
      )}

      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  ));
}

// `#${}`
// #${friend.isOnline ?<span className={s.status}></span> : <span className={s.status}></span>}
