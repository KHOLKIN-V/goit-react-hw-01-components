import PropTypes from "prop-types";
import cs from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={cs.Profile}>
        <div className={cs.description}>
          <img src={avatar} alt="avatar" className={cs.avatar} />
          <p className={cs.name}>{name}</p>
          <p className={cs.tag}>@{tag}</p>
          <p className={cs.location}>{location}</p>
        </div>

        <ul className={cs.stats}>
          <li>
            <span className={cs.label}>Followers</span>
            <span className={cs.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={cs.label}>Views</span>
            <span className={cs.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={cs.label}>Likes</span>
            <span className={cs.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
