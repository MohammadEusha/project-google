import React from 'react';
import icon from '../../Images/PubgIcon.png';
const EventsAndOffer = () => {
  return (
    <div className='container-fluid my-5 px-4'>
      <h1>Events And Offers</h1>
      <div style={{ borderRadius: '15px' }} class='card mb-3'>
        <div class='row'>
          <div class='col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xl-4'>
            <img
              style={{
                borderRadius: '15px 0px 0px 15px',
              }}
              src={icon}
              class='img-fluid   '
              alt='...'
            />
          </div>
          <div class='col-6'>
            {/* <div class='card-body'> */}
            <div class='card-text'>
              <small class='text-muted'>Ends on 08/12/21</small>
              <br />
              <h5 className=''>PUBG: NEW STATE</h5>
              <h5 className=''>Global Launch Celebrate</h5>
              <p>
                Survivors! The <br /> Battlegrounds in Pubg
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndOffer;
