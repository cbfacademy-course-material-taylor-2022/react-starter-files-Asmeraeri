import React from 'react'
import Wheel from './Wheel';


export default function Bicycle(props) {
    
    return <h2>Hi, I am a Bicycle! I have 
   
   {props.showwheels(props.numberOfWheels)}
   
    wheels </h2>;
   }

  