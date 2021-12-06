import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { getMultfilmsSelector } from 'redux-saga/selectors/multfilmsSelector';

import { Character } from 'redux-saga/types/multfilmsTypes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

interface Props {
  multName: string,
  multSection: string
}


const Characters = (props:Props) => {

  const multfilms = useSelector(getMultfilmsSelector);

  const [characters, setCharacters] = useState<Character[] > ();

  const classChecker = (length: number) => {
    switch (length) {
      case 4 :
        return 'characters__increased_slider';

      case 3 :
        return 'characters__average_slider';

      case 2 :
        return 'characters__decreased_slider';

      case 1 :
        return 'characters__small_slider';

      default :
        return 'characters__big_slider';
    }
  };

  const lengthChecker = (length: number) => 
    characters && characters.length > length ? length : characters?.length;

  const settings = {
    speed: 100,
    infinity: true,
    className: classChecker(5),
    slidesToShow: lengthChecker(5),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          className: classChecker(4),
          slidesToShow: lengthChecker(4),
        }
      },
      {
        breakpoint: 1100,
        settings: {
          className: classChecker(3),
          slidesToShow: lengthChecker(3),
        }
      },
      {
        breakpoint: 800,
        settings: {
          className: classChecker(2),
          slidesToShow: lengthChecker(2),
        }
      },
      {
        breakpoint: 600,
        settings: {
          className: classChecker(1),
          slidesToShow: lengthChecker(1),
        }
      },
    ]
  };

  useEffect(() => {
    if (multfilms[props.multSection] !== undefined) {
      multfilms[props.multSection].map(multfilm => {
        if (multfilm.name === props.multName) {
          setCharacters(multfilm.characters)
        }
      })
    }
  }, []);

  return (
    <div className="characters">
      <div className="characters__container">
        {characters
        && <Slider {...settings}>
          {characters.map((character) => (
            <div key={character.name}>
              <div className="characters__block">
                <div className="characters__head">
                  <span className="characters__name">{character.name}</span>
                  <img
                    className="characters__avatar"
                    src={`/assets/images/multHeroes/${props.multName}/avatars/${character.name}.png`}
                    alt={character.name}
                  />
                </div>
                <div className="characters__info">
                  <div className="characters__info_container">
                    <img
                      className="characters__full_length"
                      src={`/assets/images/multHeroes/${props.multName}/fullLength/${character.name}.png`}
                      alt={character.name}
                    />
                    <div className="characters__text_container">
                      <div className="characters__text">
                        {character.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        }
      </div>
    </div>
  )
}

export default Characters;