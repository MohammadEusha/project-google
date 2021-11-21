import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import icon from '../../Images/PubgIcon.png';

const Heading = () => {
  return (
    <div>
      <div className='container-fluid my-5 px-4'>
        <div className='row'>
          <div className='col-4 col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-3 '>
            <img
              style={{ borderRadius: '20px' }}
              src={icon}
              class='img-fluid'
              alt='...'
            />
          </div>
          <div className='col-8 col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-9 col-xs-9 '>
            <span className='h2'>PUBG: NEW STATE</span>
            <h5 className='text-success'>KRAFTON, Inc.</h5>
            <p className='text-secondary'>in-app purchases</p>
          </div>
        </div>
      </div>

      <div className='container-fluid my-5 px-4'>
        <div className='row text-center'>
          <div className='col-3 border-2 border-end'>
            <div>
              <h5>4.0</h5>
              <p>7L reviews</p>
            </div>
          </div>
          <div className='col-3 border-2 border-end'>
            <div>
              <h5>
                <FontAwesomeIcon icon={faDownload} />
              </h5>
              <p>1.4 GB</p>
            </div>
          </div>
          <div className='col-3 border-2 border-end'>
            <div>
              <h5>16+</h5>
              <p>
                Rated for 16+ <FontAwesomeIcon icon={faInfoCircle} />
              </p>
            </div>
          </div>
          <div className='col-3 '>
            <div>
              <h5>1Cr+</h5>
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid my-5 px-4'>
        <button className='btn btn-success btn-block col-12 py-3 '>
          <span className='h5'>Install</span>
        </button>
      </div>
    </div>
  );
};

export default Heading;
