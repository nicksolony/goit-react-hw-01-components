import { Item, Status, Avatar, Name } from "./FriendListItem.styled";


export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <Item key={id}>
             <Status status={isOnline}></Status>
             <Avatar src={avatar} alt="User avatar"/>
             <Name>{name}</Name>
        </Item>
    )
};