import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, ItemPreviewContainer, TitleContainer } from './collection-preview.styles';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <ItemPreviewContainer>
        {
            items
            .filter((item,idx) => idx < 4)
            .map((item)=> (
                //<div key={item.id}>{item.name}</div>
                <CollectionItem key={item.id} item={item}></CollectionItem>
            ))
        }
        </ItemPreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;