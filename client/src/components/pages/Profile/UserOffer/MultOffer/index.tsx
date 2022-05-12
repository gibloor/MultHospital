import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { multOfferTakeRequest } from 'redux-saga/actions/offerActions';

import { validateLongText, validateShortText } from "components/validate/offerValidate";

import './styles.scss';

interface Props {
  id: number
}

const MultOffer = (props: Props) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { id } = props;

  interface Dates {
    multfilm: string,
    description: string,
  }

  const pushOffer = async (date: Dates) => {
    try {
      const { multfilm, description } = date;
      dispatch(multOfferTakeRequest({
        multfilm, description, id: id
      }));
      
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className='multoffer'>
      <span className='multoffer__title title'>
        {t('offers.question.title')}
      </span>
      <span className='multoffer__text text'>
        {t('offers.question.title')}
      </span>
      <Formik
        initialValues={{
          multfilm: '',
          description: '',
        }}
        onSubmit={(values, { resetForm }) => { pushOffer(values); resetForm() }}
      >
        {({ errors, touched }: any) => (
          <Form className='multoffer__form'>
            <div className='multoffer__case'>
              <Field
                name='multfilm'
                validate={validateShortText}
                placeholder={t(`offers.multfilm.inputs.multfilm`)}
                className={classNames(
                  { 'multoffer__replay multoffer__replay_short': true },
                  { 'multoffer__error_border': errors.description && touched.description },
                )}
              />
              <Field
                as="textarea"
                name='description'
                validate={validateLongText}
                placeholder={t(`offers.multfilm.inputs.description`)}
                className={classNames(
                  { 'multoffer__replay multoffer__replay_long': true },
                  { 'multoffer__error_border': errors.description && touched.description },
                )}
              />
            </div>
            <button type="submit" className="button__general">
              {t('offers.button')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default MultOffer;