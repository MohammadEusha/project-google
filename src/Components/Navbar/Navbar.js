import {
  faArrowLeft,
  faEllipsisV,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <div class='container-fluid mx-3'>
        <div class='navbar-brand' href='#'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className='d-flex'>
          <div class='nav-item mx-5'>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div class='nav-item'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
