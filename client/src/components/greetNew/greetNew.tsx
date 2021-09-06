import React, { useState } from 'react';
import './greetNew.css';
import SelectQuestion from './../db/questions/selectQuestion';

interface Prop {
  changeVisiter: () => void;
}

const GreetNew = (props: Prop ) => {

  const greetPages = [
    <>
      <p>Greetings you in my MultHospital</p>
      <p>Here we try to help with psychological problems,
        from bad mood to unreasonable intolerance.
      </p>
      <p>Take a small survey:</p>
    </>
    , 
    <SelectQuestion topic='first list' />
    ,
    <SelectQuestion topic='second list' />
  ]
  const [countPage, setCountPage] = useState(0);

  return (
    <div className='greetNew'>
      <div  className='greetNew_page'>
        { greetPages[countPage] }
        { 
          countPage < greetPages.length-1 &&
          <p className='skip' onClick={() => setCountPage(countPage + 1)}> Next </p>
        }
      </div>      
      <p className='skip' onClick={() => props.changeVisiter()}> Complite </p>
    </div>
  )
}
export default GreetNew;