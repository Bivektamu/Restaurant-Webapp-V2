import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Popup = ({ title, text }) => {
  const textArray = text.split(/[.,]+/);

  const eachText = textArray.map((text, index) => {
    return (
      <h2 className='title' key={index}>
        {text}
      </h2>
    );
  });

  return (
    <div className='modal-wrapper'>
      <Link to='/'>
        <button className='close-btn'>
          <i className='fas fa-times'></i>
        </button>
      </Link>
      <h1 className='heading'>{title}</h1>
      {eachText}
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Popup;
