import React from 'react';
import data from '../data';
import Card from './Card';

export default function JournalEntry(){
    const cardsData = data.map(item => {
        return ( <Card 
            key = {item.id}
            {...item}
        />
        )
        })  


    return <div>
        {cardsData}
    </div>
}