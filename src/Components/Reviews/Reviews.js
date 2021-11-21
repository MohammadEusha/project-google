import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import icon from '../../Images/PubgIcon.png';
const Reviews = () => {
  return (
    <div className='container-fluid my-5 px-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src={icon}
            style={{ width: '15%' }}
            class='img-fluid rounded-pill me-4'
            alt='...'
          />
          <h5>Jithin Presannan</h5>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>

      <div className='mt-4 d-flex '>
        <div className='me-3'>
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-muted' />
        </div>
        <div>19/11/21</div>
      </div>

      <div>
        <p class='fs-4 pt-2'>
          Pretty good game. I have a few suggestion though. 1) Color blindness
          mode for maps would be extremely helpful. I can barely distinguish the
          red zone from t....
        </p>
      </div>

      <div className='fs-5 d-flex justify-content-between mt-5'>
        <p>Was this review helpful?</p>
        <div>
          <button
            type='button'
            class='btn btn-outline-secondary border-2 rounded-pill me-1 px-4'
          >
            <span className='h6'>Yes</span>
          </button>
          <button
            type='button'
            class='btn btn-outline-secondary border-2 mx-1 rounded-pill me-1 px-4'
          >
            <span className='h6'>No</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
