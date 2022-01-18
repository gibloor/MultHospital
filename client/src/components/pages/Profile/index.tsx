import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userImgChangeRequire } from 'redux-saga/actions/userActions';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import './styles.scss';

const Profile = () => {

  const dispatch = useDispatch();

  const [drag, setDrag] = useState(false);
  const user = useSelector(getAccountSelector);

  const takeImg = (file: File) => {
    
    const data = new FormData();
    data.append('userImg', file, `${user.name}.png`);

    dispatch(userImgChangeRequire({img: data, id: user.id, availability: user.image}));
  }

  const dragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDrag(false);
  }
  const dragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDrag(true);
  }
  const onDropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    setDrag(false);
    if (file.type === 'image/png') {
      takeImg(file);
    }
  }
  const onDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      let file = e.target.files[0];
      takeImg(file);
    }
  }

  return (
    <div className='profile'>
      <div className='profile__left'>
        <div className='profile__avatar_case' >
          {user.image &&
            <img
              className='profile__avatar'
              src={`/assets/images/users/${user.login}.png`}
            />
            ||
            <>
              <img
                className='profile__avatar'
                src={'/assets/images/users/default.png'}
              />
              <span className='profile__message'>
                drop you img
              </span> 
            </>
          }
          <label
            className='profile__drop_case'
            onDragLeave={e => dragLeave(e)}
            onDragOver={e => dragOver(e)}
            onDrop={e => onDropHandler(e)}
            htmlFor='drop_box'
          />
          {drag &&
            <div className='profile__drop_fon'>
              <div className='profile__drop_effect' />
            </div>
          }
          <input accept='image/png' onChange={e => onDrop(e)} id='drop_box' type='file' />
        </div>
        <div>
          achievements
        </div>
      </div>
      <div className='profile__right'>
        statistic
      </div>

    </div>
  )
}

export default Profile;