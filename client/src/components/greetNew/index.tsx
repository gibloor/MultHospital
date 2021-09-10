import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

interface Prop {
  changeVisiter: () => void;
}

const GreetNew = (props: Prop ) => {

  interface Question {
    id: number,
    topic: string,
    question: string,
    image: string,
    meaning: string,
    serial_num: string
  }

  const { t } = useTranslation();
  const [questions, setQuestions] = useState([]);

  const getQuestions = async (questionsList: string) => {
    try {
      const response = await fetch(`http://localhost:5000/questions/topic/${questionsList}`);
      const jsonData = await response.json();
      setQuestions(jsonData
        .sort((a:Question, b:Question) => a.topic > b.topic ? 1 : -1)
        .sort((a:Question, b:Question) => a.serial_num > b.serial_num ? 1 : -1)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuestions('involvement');
  }, []);


  return (
    <div className='greetNew'>
      <div  className='greetNew_page'>
        <p>{t('greetNew.greet.string1')}</p>
        <span>{t('greetNew.greet.string2')}</span>
        <div className='questions'>
          {questions.map((quest: Question) => (
            <div className="question" key={quest.id} onClick={() => props.changeVisiter()}>
              <div className="question_image_carcas">
                <img alt={quest.image} className="question_image" src={quest.image}/>
              </div>
              <span>{t("greetNew.questions." + quest.question)}</span>
            </div> 
          ))}
        </div>
      </div>      
    </div>
  )
}
export default GreetNew;