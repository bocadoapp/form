import React, { useCallback } from 'react'

const RemoveImage = ({ onRemove }) => {
  const removeImage = useCallback(() => {    
    if (onRemove && typeof onRemove === 'function') {
      onRemove()
    }
  }, [onRemove])
  
  return (
    <div
      onClick={removeImage}
      style={{ left: '10px', bottom: '10px' }}
      className="text-xs cursor-pointer absolute p-2 w-6 flex justify-center items-center bottom-0 left-0 right-0 rounded-lg bg-red-500 text-white">
      <i className="far fa-trash-alt" />
    </div>   
  )
}

export default RemoveImage