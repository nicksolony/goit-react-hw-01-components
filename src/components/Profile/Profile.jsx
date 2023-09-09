import PropTypes from 'prop-types';
import { ProfileContainer, Description, Avatar, Name, Info, Stats,StatsItem, Label, Quantity} from './Profile.styled';


export const Profile = ({user}) => {

    return (
        <ProfileContainer>
            <Description>
            <Avatar
              src={user.avatar}
              alt="User avatar"
            />
            <Name>{user.username}</Name>
            <Info>@{user.tag}</Info>
            <Info>{user.location}</Info>
            </Description>

            <Stats>
                <StatsItem>
                  <Label>Followers</Label>
                  <Quantity>{user.stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                  <Label>Views</Label>
                  <Quantity>{user.stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                  <Label>Likes</Label>
                  <Quantity>{user.stats.likes}</Quantity>
                </StatsItem>
            </Stats>
        </ProfileContainer>
    )


};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  };