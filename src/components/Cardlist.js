import React from 'react';
import Card from './Card';

const CardList = ({beers}) => {
    return (
        <div>
            {beers.map((beer, i) => {
                return (
                    <Card 
                        id={beer[i].id}
                        name={beer[i].name}
                        description={beer[i].description}
                    />
                );
            })
            }
        </div>
    )
};


export default CardList;