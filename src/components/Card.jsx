import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faLocationDot} />


export default function Card(){
    return <>
    <div class='card no-margin'>
        <div  className='card-img'>
            <img src="http://source.unsplash.com/sblp4evk2gs" class="img" alt="mountains"/>
        </div>
        <div className='card-text'>
            <div className='card-location'>
                <p>{element} JAPAN</p> 
                <p><a href="www.google.com">View on Google Maps</a></p>
            </div>    
            <h1>Mount Fuji</h1>
            <h4>12.jan - 12.jan</h4>
            <p class='card-descriptio'>Mostar is a city in southern Bosnia and Herzegovina, straddling the Neretva River. It’s known for the iconic Stari Most (Old Bridge), a reconstructed medieval arched bridge</p>
            
        </div>
        </div>
    <hr class="card-line"/>
    </>
}