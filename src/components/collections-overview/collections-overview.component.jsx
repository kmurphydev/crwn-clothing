import React, {useContext} from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    
    const {collectionsForPreview} = useContext(CollectionsContext);
    
    return (

    <div className='collections-overview'>
        {
            collectionsForPreview.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key = {id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
    
)};


export default CollectionsOverview;