import React from 'react';
import About from '../About/About';
import EventsAndOffer from '../EventsAndOffer/EventsAndOffer';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Navbar from '../Navbar/Navbar';
import Rate from '../Rate/Rate';
import RatingsAndReviews from '../RatingsAndRevies/RatingsAndRevies';
import Reviews from '../Reviews/Reviews';

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Heading />
      <Image />
      <About />
      <EventsAndOffer />
      <Rate />
      <RatingsAndReviews />
      <Reviews />
    </section>
  );
};

export default HomePage;
