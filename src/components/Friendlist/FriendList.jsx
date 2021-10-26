import PropTypes from "prop-types";
import cs from "./FriendList.module.css";
import FriendItem from "../FriendItem/FriendItem";

const FriendList = ({ friend }) => {
  return (
    <>
      <ul className={cs.Friendlist}>
        {friend.map(({ id, isOnline, name, avatar }) => (
          <li className={cs.item} key={id}>
            <FriendItem isOnline={isOnline} name={name} avatar={avatar} />
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
    })
  ),
};

export default FriendList;
