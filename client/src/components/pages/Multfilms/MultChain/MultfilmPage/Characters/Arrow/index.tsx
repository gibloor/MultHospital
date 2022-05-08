import React from 'react';

import arrow from 'components/assets/decorations/Arrow.png';

import './styles.scss';

interface Props {
  direction: string,
  onClick?: any 
}

const Arrow = (props: Props) => {

  const { direction, onClick } = props;

  return (
    <div onClick={onClick} className={`arrow arrow__${direction}`}>
      <img alt='arrow' className='arrow__img' src={arrow} />
    </div>
  )
};

export default Arrow;