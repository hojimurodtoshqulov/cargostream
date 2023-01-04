import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

const Proba = () => {

  useEffect(() => {
  const interval = setInterval(() => {

  }, 2000);
    return () => clearInterval(interval);
  }, []);

  const colors = [
    'Red', 'Green', 'Blue', 'Brown', 'Yellow', 'Black'
  ]

  return (
    <div className='titles'>
      {colors.map((color, i) => (
        <p className={'title-'+i}>{color}</p>
      ))}
    </div>
  );
}
// export default Proba;

// render(<Proba />, document.getElementById('root'));