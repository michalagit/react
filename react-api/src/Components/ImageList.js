import React from 'react'

import './styles.scss';

const ImageList = ({ data }) => (
  <>
    <h3>Image List:</h3>
    <div className='image-list'>
      {data.map(image => 
        <div
          key={image.id}
          className={'image'}
          style={{ backgroundImage: `url(${image.urls.regular})` }}
          />
        )}
    </div>
  </>
)

export default ImageList;