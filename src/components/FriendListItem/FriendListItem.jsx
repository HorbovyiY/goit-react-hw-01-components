import { Item, Status, Avatar, Name} from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, friendName, isOnline, id}) => { 
    return (
        <Item key={id}>
            <Status isOnline={isOnline}>&nbsp;</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{friendName}</Name>
        </Item>
)}