import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import { getMultfilmsSelector } from 'redux-saga/selectors/adminInfoSelector';

import columns from './columns';

import './styles.scss';


interface MultInfo {
  id: number,
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

  let decryptedData = [...multSelector];

  const saveChanges = async (data: Multfilms) => {
    try {
      Object.keys(data).map(field => {
        const index = Number(field.slice(-1));
        const property = field.substring(0, field.length - 1);
        decryptedData[index][property] = data[field];
      });
      // dispatch(multfilmsChanges({date));
      console.log(decryptedData);

      setMultfilms(multfilms)
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

  return (
    <div className='multChanger'>
      <span>
        MultChanger
      </span>
      
      <div className="multChanger__row">
        {columns.map(column => (
          <span className={`multChanger__field_${column.name} multChanger__field`} key={column.name}>
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
                  <div
                    key={`${column.name}${index}`}
                    className={`multChanger__field_${column.name} multChanger__field`}
                  >
                    <Field
                      name={`${column.name}${index}`}
                      validate={column.validator}
                      placeholder={`${column.name}`}
                      // placeholder={t(`head.authentication.${input.name}`)}

                      className={classNames(
                        { 'multChanger__text_input': !errors[`${column.name}${index}`] || !touched[`${column.name}${index}`] },
                        { 'error_border multChanger__text_input': errors[`${column.name}${index}`] && touched[`${column.name}${index}`] },
                      )}
                    />
    
                    {/* {errors[`${column.name}${index}`] && touched[`${column.name}${index}`] &&
                      <div className="multChanger__error_case">
                        <div className="multChanger__error_block">
                          <span className="multChanger__error_text">
                            {t(``)}
                            error
                          </span>
                        </div>
                      </div>
                    } */}
                  </div>
                  ||
                  column.tag === 'span' &&
                  <span
                    key={column.name}
                    className={`multChanger__field_${column.name} multChanger__field`}
                  >
                    {multfilm[column.name]}
                  </span>
                ))}
              </div>
            ))}
            <button type="submit" className="multChanger__submit">
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

