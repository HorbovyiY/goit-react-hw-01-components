import { FriendListGallery } from "./FriendList.styled";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends}) => { 
    return (
        <FriendListGallery>
            {friends.map(({avatar, name, isOnline, id})=>
                <FriendListItem 
                    avatar = { avatar }
                    friendName = { name }
                    isOnline = { isOnline }
                    id = {id}
                />
            )}
        </FriendListGallery>
    )
}