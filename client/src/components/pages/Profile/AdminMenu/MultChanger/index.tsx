import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ArrayHelpers, FieldArray, Form, Formik } from 'formik'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { getMultfilmsSelector } from 'redux-saga/selectors/adminInfoSelector'
import { adminMultfilmsSaveRequire } from 'redux-saga/actions/adminInfoActions'

import columns from './columns'
import FullField from './FullField'

import './styles.scss'

export interface MultInfo {
  name: string,
  level: number,
  serial: number,
  [key: string]: string | number,
}

const MultChanger = () => {

  const dispatch = useDispatch()

  const multSelector = useSelector(getMultfilmsSelector)
  const multfilms = [...multSelector]

  const saveChanges = async (data: MultInfo[]) => {
    try {
      dispatch(adminMultfilmsSaveRequire({multfilms: data}))
    } catch (err: any) {
      console.error(err.message)
    }
  }

  return (
    <div className='mult-changer'>
      <p className='mult-changer__title'>
        MultChanger
      </p>

      {multfilms.length !== 0 &&
      <Formik
        initialValues={{ multfilms: multfilms }}
        onSubmit={(value) => { saveChanges(value.multfilms) }}
      >
        {({ errors, touched, values }: any) => (
          <Form className="mult-changer__form">
            <FieldArray name="multfilms">
              {(arrayHelpers: ArrayHelpers) => (
                <>
                  <DndProvider backend={HTML5Backend}>
                    {values.multfilms.map((multfilm: MultInfo, index: number) => (
                      <div key={index} className={(index === 0 || multfilm.level !== values.multfilms[index - 1].level) ? 'mult-changer__section_title_container' : ''}>
                        {(index === 0 || multfilm.level !== values.multfilms[index - 1].level) &&
                          <>
                            <span className='mult-changer__section_title'>
                              Level of difficulty: {multfilm.level}
                            </span>
                            <div className="mult-changer__row">
                              {columns.map(column => (
                                <span className={`mult-changer__field_${column.name} mult-changer__field`} key={column.name}>
                                  {column.name}
                                </span>
                              ))}
    
                              <div className='mult-changer__leveller' />
                            </div>
                          </>
                        }
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

                  <div className='mult-changer__buttons'>
                    <div className='mult-changer__second-leveller' />

                    <button type="submit" className="mult-changer__submit">
                      Save
                    </button>
                    
                    <button
                      type="button"
                      className='mult-changer__add-button'
                      onClick={() => arrayHelpers.insert(values.multfilms.length, {
                        id: -1, name:'new', level: 4, serial: 1
                      })}
                    >
                      Add row
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      }
    </div>
  )
}

export default MultChanger