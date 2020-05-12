import React, { useRef } from 'react'
import { useIntl } from 'react-intl'
import { useDrag, useDrop } from 'react-dnd'

const createMarkup = __html => ({ __html })
const PasType = 'step'

function Pas({ text, index, remove, move, id }) {
  const { formatMessage: t } = useIntl()
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: PasType,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      //   return
      // }
      
      // Time to actually perform the action
      move(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: PasType, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.5 : 1
  drag(drop(ref))  

  return (
    <div ref={ref} className='flex flex-col py-2 my-2 border-b border-gray-200' style={{ cursor: 'move', opacity }}>
      <div className='flex items-center'>
        <i className="far fa-times-circle cursor-pointer mr-3" onClick={() => remove(index)} />
        <h3 className='text-3xl'>
        <span className='capitalize'>
          {t({ id: 'pas' })}
        </span>{' '}{index + 1}
        </h3>
      </div>
      <p dangerouslySetInnerHTML={createMarkup(text.replace(/\r?\n/g, '<br />'))} />
    </div>
  )
}

export default Pas;