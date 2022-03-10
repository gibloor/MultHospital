import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cropper from 'react-cropper';

import { userAvatarSaveRequire } from 'redux-saga/actions/userActions';
import { avatarSelector } from 'redux-saga/selectors/profileSelector';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import 'cropperjs/dist/cropper.css';
import './styles.scss';

interface Props {
  id: number,
}

const Avatar = (props: Props) => {

  const dispatch = useDispatch();
  const avatar = useSelector(avatarSelector);
  const user = useSelector(getAccountSelector);

  const [drag, setDrag] = useState(false);
  const [cropImage, setCropImage] = useState<any>();
  const [crop, setCrop] = useState<any>();

  const { id } = props;

  const settings = {
    src: cropImage,
    initialAspectRatio: 1 / 1,
    guides: false,
    minCropBoxHeight: 30,
    minCropBoxWidth: 30,
    background: false,
    responsive: true,
    autoCropArea: 1,
    aspectRatio: 1 / 1,
    checkOrientation: false,
    onInitialized: (instance: any) => {
      setCrop(instance);
    }
  }

  const takeImg = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setCropImage(reader.result as any);
    };
    reader.readAsDataURL(file);
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
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
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

  const getCrop = () => {
    dispatch(userAvatarSaveRequire({
      avatar: crop.getCroppedCanvas().toDataURL(),
      id: id,
    }));
    setCropImage('');
  };

  const imageCheck = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/assets/images/users/default.png';
  }

  return (
    <div className='avatar drop_avatar' >
      {cropImage &&
        <>
          <Cropper className='avatar__img' {...settings} />
          <div className='avatar__crop_case'>
            <span className='avatar__crop_button' onClick={() => setCropImage('')}>
              Отмена
            </span>
            <span className='avatar__crop_button' onClick={() => getCrop()}>
              Обрезать
            </span>
          </div>
        </> ||
      user.id === id &&
        <>
          <img
            className='avatar__img'
            src={user.avatar}
            alt='avatar'
            onError={(e) => (imageCheck(e))}
          />
          {!user.avatar &&
          <span className='avatar__message'>
            drop you img
          </span>
          } 
          <label
            className='avatar__drop_case drop_avatar'
            onDragLeave={e => dragLeave(e)}
            onDragOver={e => dragOver(e)}
            onDrop={e => onDropHandler(e)}
            htmlFor='drop_box'
          />
          {drag &&
            <div className='avatar__drop_fon drop_avatar'>
              <div className='avatar__drop_effect' />
            </div>
          }
          <input accept="image/png, image/jpeg" onChange={e => onDrop(e)} id='drop_box' type='file' />
        </>
        ||
        <img
          className='avatar__img'
          src={avatar}
          alt='avatar'
          onError={(e) => (imageCheck(e))}
        />
      }
    </div>
  )
}

export default Avatar;