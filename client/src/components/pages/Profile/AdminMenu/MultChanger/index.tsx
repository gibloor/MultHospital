import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import { getMultfilmsSelector } from 'redux-saga/selectors/adminInfoSelector';

import columns from './columns';

import './styles.scss';


interface MultInfo {
  name: string,
  level: number,
  serial: number,
  [key: string]: string | number,
}

interface Multfilms {
  [key: string]: string | number,
}

const MultChanger = () => {

  const dispatch = useDispatch();

  const multSelector = useSelector(getMultfilmsSelector);

  const [multfilms, setMultfilms] = useState<Multfilms>({});

  const saveChanges = async (date: Multfilms) => {
    try {
      // dispatch(multfilmsChanges({date));
      console.log(date);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => { 
    const mults: Multfilms = {};
    multSelector.map((multfilm, index) => {
      {Object.keys(multfilm).map((field) => {
        mults[`${field}${index}`] = multfilm[field]
      })}
    });
    setMultfilms(mults);
  }, [multSelector]);

  // useEffect(() => {
  //   console.log(multfilms);
  // }, [multfilms]);

  return (
    <div className='multChanger'>
      <span>
        MultChanger
      </span>
      
      <div className="multChanger__row">
        {columns.map(column => (
          <span key={column.name}>
            {column.name}
          </span>
        ))}
      </div>
      {Object.keys(multfilms).length !== 0 &&
      <Formik
        initialValues={ multfilms }
        onSubmit={(values) => { saveChanges(values) }}
      >
        {({ errors, touched }: any) => (
          <Form className="multChanger__form">
            {multSelector.map((multfilm, index) => (
              <div key={index} className="multChanger__row">
                {columns.map(column => (
                  column.tag === 'input' &&
                  <div key={`${column.name}${index}`}>
                    <Field

                      name={`${column.name}${index}`}
                      validate={column.validator}
                      
                      placeholder={`${column.name}${index}`}
                      // placeholder={t(`head.authentication.${input.name}`)}

                      className={classNames(
                        { 'auth__input': !errors[`${column.name}${index}`] || !touched[`${column.name}${index}`] },
                        { 'auth__input error_border': errors[`${column.name}${index}`] && touched[`${column.name}${index}`] },
                      )}
                    />
                    
                    {errors[`${column.name}${index}`] && touched[`${column.name}${index}`] &&
                      <div className="auth__error_case">
                        <div className="auth__error_block">
                          <span className="auth__error_text">
                            {/* {t(`head.authentication.errors.${input.name}.${errors[input.name]}`)} */}
                            error
                          </span>
                        </div>
                      </div>
                    }
                  </div>
                  ||
                  column.tag === 'span' &&
                  <span key={column.name}>
                    {multfilm[column.name]}
                  </span>
                ))}
              </div>
            ))}
            <button type="submit" className="auth__submit auth__input">
              Go
            </button>
          </Form>
        )}
      </Formik>
      }
    </div>
  )
};

export default MultChanger;

