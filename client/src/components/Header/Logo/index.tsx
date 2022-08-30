import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Logo = () => {
  
  return (
    <Link to="/" data-testid='main-link'>
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46">
        <g fill="#FFFFFF">
          <path d="M129.19,139.91c-0.95-17.86-2.09-39.33-1.9-55.29h-0.57c-4.37,15.01-9.69,30.97-16.15,48.64l-22.61,62.13H75.42
            L54.71,134.4c-6.08-18.05-11.21-34.58-14.82-49.78h-0.38c-0.38,15.96-1.33,37.43-2.47,56.62l-3.42,54.91H17.85l8.93-128.06h21.09
            l21.85,61.94c5.32,15.77,9.69,29.83,12.92,43.13h0.57c3.23-12.92,7.79-26.98,13.49-43.13l22.8-61.94h21.09l7.98,128.06h-16.15
            L129.19,139.91z"
          />
          <path d="M148.01,68.09v53.58h61.94V68.09h16.72v128.06h-16.72v-60.04h-61.94v60.04h-16.53V68.09H148.01z" />
        </g>
      </svg>
    </Link>
  )
};

export default Logo;