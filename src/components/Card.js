import React from 'react';

const Card = ({id, name, description}) => {
  return (
    <div className='beer-card'>
      <img alt='beers' src={`https://images.punkapi.com/v2/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;