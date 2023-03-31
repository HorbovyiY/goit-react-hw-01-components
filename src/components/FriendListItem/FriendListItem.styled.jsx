import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    margin-top: 10px;
`;

export const Status = styled.span`
    height: 5px;
    background-color: ${({isOnline}) => {
    if (isOnline) { return "#00ff00"}; 
    return "#ff0000";
    }};
`;

export const Avatar = styled.img`

`;

export const Name = styled.p`
    margin: 0;
`;