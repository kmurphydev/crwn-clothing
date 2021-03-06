import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles.jsx';

const Directory = ({sections}) => {
  
  return (

  
  <DirectoryMenuContainer>
      {
          sections.map(({id, ...otherSectionProps})=>(
              <MenuItem key={id} {...otherSectionProps}></MenuItem>
          ))
      }
  </DirectoryMenuContainer>

        
    
)};

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
});

export default connect(mapStateToProps)(Directory);