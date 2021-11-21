import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rate = () => {
  return (
    <div className='container-fluid my-5 px-4'>
      <span className='h1'>Rate this app</span>
      <p>Tell others what you think</p>
      <div className='d-flex justify-content-between display-1'>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default Rate;
