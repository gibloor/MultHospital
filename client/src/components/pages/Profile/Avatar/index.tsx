import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cropper from 'react-cropper';
import { useParams } from 'react-router';

import { avatarSelector } from 'redux-saga/selectors/profileSelector';
import { profileTakeRequire } from 'redux-saga/actions/profileActions';
import { userAvatarSaveRequire } from 'redux-saga/actions/userActions';


import 'cropperjs/dist/cropper.css';
import './styles.scss';

interface Params {
  id: string,
}

const Avatar = () => {

  const dispatch = useDispatch();
  const params:Params = useParams();
  const avatar = useSelector(avatarSelector);

  const [drag, setDrag] = useState(false);
  const [image, setImage] = useState<any>();
  const [crop, setCrop] = useState<any>();

  const id = Number(params.id);

  const settings = {
    src: image,
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
      setImage(reader.result as any);
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

  const getCrop = () => {
    dispatch(userAvatarSaveRequire({
      avatar: crop.getCroppedCanvas().toDataURL(),
      id: id,
    }));
    setImage('');
  };

  const imageCheck = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/assets/images/users/default.png';
  }

  useEffect(() => {
    dispatch(profileTakeRequire({ id: id }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='avatar drop_avatar' >
      {image &&
      <>
        <Cropper className='avatar__img' {...settings} />
        <div className='avatar__crop' onClick={() => getCrop()}>Обрезать</div>
      </>
      ||
      <>
        <img
          className='avatar__img'
          src={avatar}
          alt='avatar'
          onError={(e) => (imageCheck(e))}
        />
        <span className='avatar__message'>
          drop you img
        </span> 
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
        <input accept='image/png' onChange={e => onDrop(e)} id='drop_box' type='file' />
      </>
      }
    </div>
  )
}

export default Avatar;