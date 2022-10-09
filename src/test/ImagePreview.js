import React from 'react'

export default function ImagePreview({image, deleteFunc}) {
  return (
    <div className="ImagePreview" draggable>
      <img src={image} alt="preview" />
      <div className="icon_container" onClick={deleteFunc}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  )
}
