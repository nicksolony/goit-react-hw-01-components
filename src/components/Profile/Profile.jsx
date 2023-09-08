import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({user}) => {

    console.log(user.username);
    return (
        <div className={css.profile}>
            <div className={css.description}>
            <img
              src={user.avatar}
              alt="User avatar"
              className={css.avatar}
            />
            <p className={css.name}>{user.username}</p>
            <p className={css.tag}>{user.tag}</p>
            <p className={css.location}>{user.location}</p>
            </div>

            <ul className="stats">
                <li>
                  <span className="label">Followers</span>
                  <span className="quantity">{user.stats.followers}</span>
                </li>
                <li>
                  <span className="label">Views</span>
                  <span className="quantity">{user.stats.views}</span>
                </li>
                <li>
                  <span className="label">Likes</span>
                  <span className="quantity">{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    )


};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  };