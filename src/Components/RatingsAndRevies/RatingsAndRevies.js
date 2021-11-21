import {
  faArrowRight,
  faInfoCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const RatingsAndReviews = () => {
  return (
    <div className='container-fluid my-5 px-4'>
      <h5 className='mb-5 text-success'>Write a review</h5>
      <div className='d-flex justify-content-between'>
        <h2>
          Ratings and reviews <FontAwesomeIcon icon={faInfoCircle} />
        </h2>
        <h1>
          <FontAwesomeIcon icon={faArrowRight} />
        </h1>
      </div>

      <div className='row'>
        <div className='col-4'>
          <p className='display-1 fw-bold'>4.0</p>
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-success' />
          <FontAwesomeIcon icon={faStar} className='text-muted' />
        </div>
        <div className='col-8'>
          <div className='d-flex align-items-center'>
            <div className='col-1'>5</div>
            <div class='progress col-11 rounded-pill'>
              <div
                class='progress-bar w-75 bg-success'
                role='progressbar'
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <div className='col-1'>4</div>
            <div class='progress col-11 rounded-pill'>
              <div
                class='progress-bar w-25 bg-success'
                role='progressbar'
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <div className='col-1'>3</div>
            <div class='progress col-11 rounded-pill'>
              <div
                class='progress-bar w-50 bg-success'
                role='progressbar'
                aria-valuenow='50'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <div className='col-1'>2</div>
            <div class='progress col-11 rounded-pill'>
              <div
                class='progress-bar w-75 bg-success'
                role='progressbar'
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <div className='col-1'>1</div>
            <div class='progress col-11 rounded-pill'>
              <div
                class='progress-bar w-25 bg-success'
                role='progressbar'
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
