import React from 'react';
import Swal from 'sweetalert2';
import icon from '../../Images/PubgIcon.png';
const Image = () => {
  const showImg = () => {
    Swal.fire({
      imageUrl: 'https://apps4u.store/wp-content/uploads/pubg-icon.png',
      imageAlt: 'Custom image',
      showConfirmButton: false,
    });
  };
  return (
    <div className='container-fluid my-5 px-4'>
      <div
        id='carouselExampleControls'
        class='carousel slide '
        data-bs-ride='carousel'
      >
        <div class='carousel-inner '>
          <div class='carousel-item active'>
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
          </div>
          <div class='carousel-item'>
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
          </div>
          <div class='carousel-item'>
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
            <img
              style={{ borderRadius: '15px' }}
              onClick={showImg}
              src={icon}
              class='w-25 p-1 '
              alt='...'
            />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Image;
