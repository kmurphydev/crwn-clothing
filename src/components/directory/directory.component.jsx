import React, {useContext} from 'react';

import DirectoryContext from '../../contexts/directory/directory.context.js';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const {sections} = useContext(DirectoryContext);
  return (

  
  <div className = 'directory-menu'>
      {
          sections.map(({id, ...otherSectionProps})=>(
              <MenuItem key={id} {...otherSectionProps}></MenuItem>
          ))
      }
  </div>

        
    
);
};

export default Directory;