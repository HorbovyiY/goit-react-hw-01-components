import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, friendName, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}>&nbsp;</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{friendName}</Name>
        </Item>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    friendName: PropTypes.string,
    isOnline: PropTypes.bool,
}