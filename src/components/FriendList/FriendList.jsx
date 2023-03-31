import PropTypes from 'prop-types';

import { FriendListGallery } from "./FriendList.styled";
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <FriendListGallery>
            {friends.map(({ avatar, name, isOnline, id }) =>
                <FriendListItem key={id}
                    avatar={avatar}
                    friendName={name}
                    isOnline={isOnline}
                />
            )}
        </FriendListGallery>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}