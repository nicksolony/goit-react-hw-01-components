import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        
        <ul class="friend-list">
            {friends.map(({avatar, name, isOnline, id})=>
             <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
             />
            )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      })
    )
  };