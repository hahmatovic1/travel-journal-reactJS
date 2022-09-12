import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faLocationDot} />


export default function Card(props){
    console.log("pass")
    return <>
    <div class='card no-margin'>
        <div  className='card-img'>
            <img src={props.imageUrl} class="img" alt="mountains"/>
        </div>
        <div className='card-text'>
            <div className='card-location'>
                <p>{element} {props.location}</p> 
                <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            </div>    
            <h1>{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p class='card-description'>{props.description}</p>
        </div>
        </div>
    <hr class="card-line"/>
    </>
}