import React from 'react';
import {withRouter} from 'react-router-dom';

import {
    MenuItemContainer,
    ContentContainer,
    TitleContainer,
    SubtitleContainer,
    BackgroundImageContainer

} from './menu-item.styles';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer
    size={size}
    onClick = {()=> history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer 
        className = 'background-image'
        style={{
            backgroundImage: `url(${imageUrl})`,
        }}></BackgroundImageContainer>

        <ContentContainer
        className='content'>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);