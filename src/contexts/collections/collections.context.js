import { createContext} from 'react';

import SHOP_DATA from './shop.data';

const collections = SHOP_DATA;
const collectionsForPreview = Object.keys(collections).map(
    key=> collections[key]
);

const CollectionsContext = createContext({
    collections,
    collectionsForPreview
});

export default CollectionsContext;

