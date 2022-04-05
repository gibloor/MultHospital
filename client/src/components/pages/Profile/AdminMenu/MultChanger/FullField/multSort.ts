import { ArrayHelpers } from 'formik';

import { MultInfo } from '..';

export const specialPosChange = (multfilms: MultInfo[], hoverIndex: number) => {
  let changingIndex = hoverIndex;
    
  while (multfilms[changingIndex] && multfilms[changingIndex].level === multfilms[hoverIndex].level) {
    multfilms[changingIndex].serial += 1;
    changingIndex++;
  };
}

export const oldPosChange = (index: number, multfilms: MultInfo[]) => {
  let localIndex = index + 1;

  while (multfilms[localIndex] && multfilms[localIndex].serial > 1)
  {
    multfilms[localIndex].serial--;
    localIndex++;
  }
}

export const newPosChange = (index: number, multfilms: MultInfo[], newPos: number) => {

if (newPos < index) {
    let changingIndex = newPos;

    while (changingIndex < index && multfilms[changingIndex].level === multfilms[newPos].level) {
      multfilms[changingIndex].serial += 1;
      changingIndex++;
    };
  } else {
    let changingIndex = index + 1;

    while (newPos >= changingIndex && multfilms[changingIndex].level === multfilms[newPos].level) {
      multfilms[changingIndex].serial -= 1;
      changingIndex++;
    };
  }
}

export const multSort = (index: number, type: string, multfilm: MultInfo, multfilms: MultInfo[], arrayHelpers: ArrayHelpers) => {

  if (type === 'name') {
    return;
  };

  if (
    multfilms[index + 1] &&
    multfilm.level === multfilms[index + 1].level &&
    multfilm.serial === multfilms[index + 1].serial - 1 ||
    multfilms[index - 1] &&
    multfilm.level === multfilms[index - 1].level &&
    multfilm.serial === multfilms[index - 1].serial + 1
    ) {
    return;
  };

  if (multfilm.level && multfilm.serial) {
    let newPos = 0;

    if (type === 'serial') {
      newPos = index;
      //searching new position. start
      //if new position lower
      while (
        newPos !== 0 &&
        multfilm.serial <= multfilms[newPos - 1].serial
      ) {
        newPos--;
      };
      //if new position higher
      while (
        newPos >= index &&
        multfilm.serial >= multfilms[newPos + 1].serial &&
        multfilm.level === multfilms[newPos + 1].level
      ) {
        newPos++;
      };
      //searching new position. end
      
      newPosChange(index, multfilms, newPos);
      //check if new serial overhigh
      if (multfilm.serial > multfilms[newPos].serial + 1) {
        multfilm.serial = multfilms[newPos].serial + 1
      }
    } else if (type === 'level') {
      //searching new position
      while (multfilms[newPos + 1] && multfilm.level >= multfilms[newPos + 1].level) {
        newPos++;
      };

      if (multfilm.level !== multfilms[newPos].level) {
        multfilm.serial = 1;
      } else {
        multfilm.serial = multfilms[newPos].serial + 1;
      }

      if (index > newPos) {
        newPos++
      };

      oldPosChange(index, multfilms);
    };
    arrayHelpers.move(index, newPos);
  }
};