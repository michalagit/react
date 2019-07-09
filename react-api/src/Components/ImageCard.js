import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';

 const ImageCard = ({src, description}) => {
  const [ rowSpan, setRowSpan ] = useState(0);

  const imgRef = useRef();


  const imageHeight = () => {
    setRowSpan(Math.ceil(imgRef.current.clientHeight/10))
  }
  
  const cardStyles = {
    gridRowEnd: `span ${rowSpan}`
  }

  return (
    <div className='image-card' style={cardStyles}>
     <img src={src} alt={description} ref={imgRef} onLoad={imageHeight}/>
    </div>
  )
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    description: PropTypes.string
  })
}

export default ImageCard;