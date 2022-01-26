import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cropper from 'react-cropper';

import { userImgChangeRequire } from 'redux-saga/actions/userActions';

import 'cropperjs/dist/cropper.css';
import './styles.scss';

interface Props {
  login: string,
}

const Avatar = (props: Props) => {

  const dispatch = useDispatch();

  const [drag, setDrag] = useState(false);
  const [image, setImage] = useState();
  const [crop, setCrop] = useState<any>();
  const { login } = props;

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
    dispatch(userImgChangeRequire({
      img: crop.getCroppedCanvas().toDataURL(),
      login: login,
    }));
  };

  const imageCheck = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/assets/images/users/default.png';
  }

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
          src={`/assets/images/users/${login}.png`}
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