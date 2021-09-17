import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

interface Prop {
  changeVisiter: () => void;
}

const GreetNew = (props: Prop ) => {

  interface Select {
    text: string,
    image: string,
    select: string,
  }

  const { t } = useTranslation();

  const chooser = [
    {
      text: "text1",
      image: "https://i.ibb.co/1dyPjPX/first-List-Face-Up.png",
      select: "common"
    },
    { 
      text: "text2",
      image: "https://i.ibb.co/0VfV5Hv/first-List-Futurama.png",
      select: "uncommon"
    },
    {
      text: "text3",
      image: "https://i.ibb.co/1fGdYLC/first-List-Watashi.png",
      select: "rare"
    }
  ]

  return (
    <div className='greetNew'>
      <div className='greetNew_page'>
        <p>{t('greetNew.greet.string1')}</p>
        <span>{t('greetNew.greet.string2')}</span>
        <div className='questions'>
          {chooser.map((choose: Select) => (
            <div className="question" key={choose.select}
                 onClick={() => ((props.changeVisiter(), 
                                  localStorage.setItem('involvement',
                                  choose.select)))}
            >
              <div className="question_image_carcas">
                <img 
                  alt={choose.select} 
                  className="question_image" 
                  src={choose.image}
                />
              </div>
              <span>{t("greetNew.chooser." + choose.text)}</span>
            </div> 
          ))}
        </div>
      </div>      
    </div>
  )
}
export default GreetNew;