import PropTypes from "prop-types";
import cs from "./FriendList.module.css";

const FriendList = ({ friend }) => {
  return (
    <>
      <ul className={cs.Friendlist}>
        {friend.map((e) => (
          <li className={cs.item} key={e.id}>
            <span
              className={cs.status}
              style={
                e.isOnline
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            >
              {e.isOnline}
            </span>
            <img className={cs.avatar} src={e.avatar} alt={e.name} width="48" />
            <p className={cs.name}>{e.name}</p>
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
