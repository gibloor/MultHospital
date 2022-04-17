import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrayHelpers, FieldArray, Form, Formik } from 'formik';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { getMultfilmsSelector } from 'redux-saga/selectors/adminInfoSelector';
import { adminMultfilmsSaveRequire } from 'redux-saga/actions/adminInfoActions';

import columns from './columns';
import FullField from './FullField';

import './styles.scss';

export interface MultInfo {
  name: string,
  level: number,
  serial: number,
  [key: string]: string | number,
}

const MultChanger = () => {

  const dispatch = useDispatch();

  const multSelector = useSelector(getMultfilmsSelector);
  const multfilms = [...multSelector];

  const saveChanges = async (data: MultInfo[]) => {
    try {
      dispatch(adminMultfilmsSaveRequire({multfilms: data}))
    } catch (err: any) {
      console.error(err.message);
    }
  };

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

      {multfilms.length !== 0 &&
      <Formik
        initialValues={{ multfilms: multfilms }}
        onSubmit={(value) => { saveChanges(value.multfilms) }}
      >
        {({ errors, touched, values }: any) => (
          <Form className="multChanger__form">
            <FieldArray name="multfilms">
              {(arrayHelpers: ArrayHelpers) => (
                <>
                  <DndProvider backend={HTML5Backend}>
                    {values.multfilms.map((multfilm: MultInfo, index: number) => (
                      <div key={index}>
                      {(index === 0 || multfilm.level !== values.multfilms[index - 1].level) &&
                      <span>{multfilm.level || 'undefined'}</span>}
                      <FullField
                        key={index}
                        errors={errors}
                        touched={touched}
                        multfilms={values.multfilms}
                        arrayHelpers={arrayHelpers}
                        multfilm={multfilm}
                        index={index}
                      />
                      </div>
                    ))}
                  </DndProvider>

                  <button type="submit" className="multChanger__submit">
                    Go
                  </button>
                  
                  <button type="button"
                    onClick={() => arrayHelpers.insert(values.multfilms.length, { id: -1, name:'new', level: 0, serial: 0})}
                  >
                    +1
                  </button>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      }
    </div>
  )
};

export default MultChanger;