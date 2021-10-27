import PropTypes from "prop-types";
import cs from "./FriendItem.module.css";

const FriendItem = ({ isOnline, name, avatar }) => {
  return (
    <>
      <span
        className={cs.status}
        style={
          isOnline ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        {isOnline}
      </span>
      <img className={cs.avatar} src={avatar} alt={name} width="48" />
      <p className={cs.name}>{name}</p>
    </>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
