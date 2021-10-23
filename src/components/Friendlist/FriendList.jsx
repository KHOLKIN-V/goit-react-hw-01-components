import PropTypes from "prop-types";
import cs from "./FriendList.module.css";

const FriendList = ({ friend }) => {
  return (
    <>
      <ul className={cs.Friendlist}>
        {friend.map(({ id, isOnline, name, avatar }) => (
          <li className={cs.item} key={id}>
            <span
              className={cs.status}
              style={
                isOnline
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            >
              {isOnline}
            </span>
            <img className={cs.avatar} src={avatar} alt={name} width="48" />
            <p className={cs.name}>{name}</p>
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
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
