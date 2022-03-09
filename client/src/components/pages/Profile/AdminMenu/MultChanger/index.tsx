import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import columns from './columns';

import './styles.scss';

interface MultInfo {
  name: string,
  level: number,
  serial: number,
  [key: string]: string | number,
}

const MultChanger = () => {

  return (
    <div className='multChanger'>
      <span>
        MultChanger
      </span>
      
      <div>
        {columns.map(column => (
          <span key={column.name}>
            {column.name}
          </span>
        ))}
      </div>
      {/* {multfilms.map(multfilm => (
        <div key={multfilm.name} className="multChanger__row">
          {columns.map(column => (
            column.tag === 'input' && <input type="text" value={multfilm[column.name]} key={column.name} />
            ||
            column.tag === 'span' && <span key={column.name}>{multfilm[column.name]}</span>
          ))}
        </div>
      ))} */}
    </div>
  )
};

export default MultChanger;

