import React, { useState } from 'react';
import classNames from 'classnames';

import slash from 'components/assets/decorations/slash.png';

import './styles.scss';

interface Props {
  changeOffer: (offer: string) => void,
  offer: string,
}

const Chooser = (props: Props) => {
  const { changeOffer, offer } = props;

  const [chosen, setChosen] = useState(-1);

  const changeButtons = (option: string) => {
    if (option !== offer) {
      setChosen(chosen + 1);
      changeOffer(option);
    };
  }

  return (
    <div className='chooser'>
      <div
        className={classNames(
          { 'chooser__option': true },
          { 'chooser__option_chosed': offer === 'multOffer' },
          { 'left': chosen < 1 },
          { 'chooser__option_multOffer_left': offer === 'multOffer' && chosen < 1 },
          { 'chooser__option_multOffer_right': offer === 'questOffer' && chosen < 1 },
          { 'chooser__option_left': offer === 'multOffer' && chosen >= 1 },
          { 'chooser__option_right': offer === 'questOffer' && chosen >= 1 },
        )}
      >
        <span
          className={classNames(
            { 'chooser__option_text': true },
            { 'chooser__option_text_left': offer === 'option' },
          )}
          onClick={() => (changeButtons('multOffer'))}>
          Multfilm
        </span>
      </div>
      <img
        alt='delimiter'
        src={slash} 
        className={classNames(
          { 'chooser__delimiter': true },
          { 'hide': offer !== 'option' },
        )}
      />
      <div
        className={classNames(
          { 'chooser__option': true },
          { 'chooser__option_chosed': offer === 'questOffer' },
          { 'chooser__option_questOffer_right': offer === 'multOffer' && chosen < 1 },
          { 'chooser__option_questOffer_left': offer === 'questOffer' && chosen < 1 },
          { 'chooser__option_right': offer === 'multOffer' && chosen >= 1 },
          { 'chooser__option_left': offer === 'questOffer' && chosen >= 1 },
        )}
      >
        <span
          className={classNames(
            { 'chooser__option_text': true },
            { 'chooser__option_text_right': offer === 'option' },
          )}
          onClick={() => (changeButtons('questOffer'))}
        >
          Question
        </span>
      </div>
    </div>
  )
};

export default Chooser;