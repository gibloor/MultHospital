import React from 'react';
import Slider from 'react-slick';
import { Trans, useTranslation } from 'react-i18next';

import { Character } from 'redux-saga/types/multfilmsTypes';

import Arrow from './Arrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

interface Props {
  multName: string,
  characters: Character[]
}

const Characters = (props:Props) => {

  const extension = [1, 2];
  const { characters, multName } = props;
  const { t } = useTranslation();

  const classChecker = (length: number) => {
    if (characters.length < length) {
      length = characters.length;
    }
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
    characters.length > length ? length : characters.length;

  const settings = {
    speed: 100,
    infinity: true,
    focusOnSelect: true,
    className: classChecker(5),
    slidesToShow: lengthChecker(5),
    slidesToScroll: 1,
    nextArrow:  <Arrow direction='next' /> ,
    prevArrow: <Arrow direction='prev' />,
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

  return (
    <div className="characters">
      <div className="characters__container">
        <Slider {...settings}>
          {extension.map(() => (
            characters.map((character) => (
              <div key={character.name}>
                <div className="characters__block">

                  <div className="characters__head">
                    <span className="characters__name">
                      {t(`multfilms.${multName}.personal.characters.${character.name}.name`)}
                    </span>
                    <img
                      className="characters__avatar"
                      src={`/assets/images/multfilms/${multName}/multHeroes/avatars/${character.name}.png`}
                      alt={character.name}
                    />
                  </div>

                  <div className="characters__info">
                    <div className="characters__info_container">
                      <img
                        className="characters__full_length"
                        src={`/assets/images/multfilms/${multName}/multHeroes/fullLength/${character.name}.png`}
                        alt={character.name}
                      />
                      <div className="characters__text_container">
                        <div className="characters__text">
                          <p className="characters__name">
                            {t(`multfilms.${multName}.personal.characters.${character.name}.name`)}
                          </p>
                          <p className="characters__text_info">
                            <Trans i18nKey={`multfilms.${multName}.personal.characters.${character.name}.description`}>
                              <strong>Name</strong> - short description
                              <p>text1</p>
                              <p>text2</p>
                              <p>text3</p>
                              <p>text4</p>
                              <p>text5</p>
                              <p>text6</p>
                              <p>text7</p>
                              <p>text8</p>
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Characters;