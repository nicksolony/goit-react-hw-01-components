import { Item, Status } from "./FriendListItem.styled";


export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <Item key={id}>
             <Status status={isOnline}></Status>
             <img class="avatar" src={avatar} alt="User avatar" width="48" />
             <p class="name">{name}</p>
        </Item>
    )
};