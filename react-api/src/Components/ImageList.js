import React from 'react'

import ImageCard from './ImageCard';
import './styles.scss';

const ImageList = ({ data }) => (
  <>
    <h3>Image List:</h3>
    <div className='image-list'>
      {data.map(image => 
        <ImageCard
          key={image.id}
          src={image.urls.regular}
          description={image.description} 
        />
        )}
    </div>
  </>
)

export default ImageList;