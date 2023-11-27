import React, { useRef } from 'react'
import classNames from 'classnames'
import { ArrayHelpers, Field } from 'formik'
import { useDrag, useDrop } from 'react-dnd'

import { MultInfo } from '..'
import columns from '../columns'
import { multSort, newPosChange, oldPosChange, specialPosChange } from './multSort'

import './styles.scss'

interface Props {
  errors: any,
  touched: any,
  arrayHelpers: ArrayHelpers,
  multfilm: MultInfo,
  multfilms: MultInfo[]
  index: number,
}

const FullField = (props: Props) => {

  const {
    errors,
    touched,
    arrayHelpers,
    multfilm,
    multfilms,
    index,
  } = props
  
  interface DragItem {
    index: number
    id: string
  }

  const callMultSort = (index: number, name: string) => {
    multSort(index, name, multfilm, multfilms, arrayHelpers)
  }

  const ref = useRef<HTMLDivElement>(null)

  const [ , drop] = useDrop<DragItem>({
    accept: 'field',
    hover(item: DragItem) {

      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      if (multfilms[dragIndex].level !== multfilms[hoverIndex].level) {
        oldPosChange(dragIndex, multfilms)
      }

      multfilms[dragIndex].serial = multfilms[hoverIndex].serial

      if (multfilms[dragIndex].level !== multfilms[hoverIndex].level && dragIndex < hoverIndex) {
        specialPosChange(multfilms, hoverIndex)
        arrayHelpers.move(dragIndex, hoverIndex - 1)
      } else {
        newPosChange(dragIndex, multfilms, hoverIndex)
        arrayHelpers.move(dragIndex, hoverIndex)
      }

      multfilms[dragIndex].level = multfilms[hoverIndex].level
      item.index = hoverIndex
    },
  })

  const [ , drag] = useDrag({
    type: 'field',
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div
      ref={ref}
      className="full-field"
    >
      {columns.map(column => (
        <div key={`${column.name}${index}`}
          className={`mult-changer__field_${column.name} mult-changer__field`}
        >
          <Field
            name={`multfilms.${index}.${column.name}`}
            validate={column.validator}
            placeholder={`${column.name}`}
            onKeyUp={() => callMultSort(index, column.name)}
            type={column.type}
            className={classNames(
              { 'mult-changer__text_input':
                !errors.multfilms || 
                !errors.multfilms[index] ||
                !errors.multfilms[index][column.name] ||
                !touched.multfilms ||
                !touched.multfilms[index] ||
                !touched.multfilms[index][column.name]
              },
              { 'mult-changer__text_input mult-changer__error':
                errors.multfilms &&
                errors.multfilms[index] &&
                errors.multfilms[index][column.name] &&
                touched.multfilms &&
                touched.multfilms[index] &&
                touched.multfilms[index][column.name]
              },
            )}
          />
        </div>
      ))}
      <button type="button" onClick={() => arrayHelpers.remove(index)}>
        X
      </button>
    </div>
  )
}

export default FullField