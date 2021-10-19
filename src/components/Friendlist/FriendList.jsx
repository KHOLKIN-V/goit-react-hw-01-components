import PropTypes from "prop-types";

const FriendList = ({ friend }) => {
  return (
    <>
      <ul class="friend-list">
        {friend.map((e) => (
          <li class="item" key={e.id}>
            <span class="status">{e.isOnline}</span>
            <img class="avatar" src={e.avatar} alt={e.name} width="48" />
            <p class="name">{e.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    })
  ),
};

export default FriendList;
