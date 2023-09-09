import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListContainer } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        
        <FriendListContainer>
            {friends.map(({avatar, name, isOnline, id})=>
             <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
             />
            )}
        </FriendListContainer>
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