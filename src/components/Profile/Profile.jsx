import { Avatar, Description, DescriptionLocation, DescriptionName, DescriptionTag, ProfileBox, Stats, StatsItem, StatsLabel, StatsQuantity } from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats})=>{
    return(
    <ProfileBox>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <DescriptionName>{username}</DescriptionName>
            <DescriptionTag>@{ tag }</DescriptionTag>
            <DescriptionLocation>{location}</DescriptionLocation>
        </Description>

        <Stats>
            <StatsItem>
                <StatsLabel>Followers: </StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views: </StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes: </StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </Stats>
    </ProfileBox>
    )
}