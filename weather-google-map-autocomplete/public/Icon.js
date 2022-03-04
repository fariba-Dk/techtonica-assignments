import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cloudy from '../../assets/cloudy.svg';
import Sunny from '../../assets/sunny.svg';
import Rainy from '../../assets/rainy.svg';
import Snowing from '../../assets/snowing.svg';
import Partial from '../../assets/partial.svg';
import Thermometer from '../../assets/thermometer.svg';
import "../index.css";
import { IconName } from "react-icons/fa";


export default function Icon(props) {


  {switch (props.icon) {
    case 'Cloudy':
      return <img className='icon' src={Cloudy} alt={Cloudy} />;
      break;
    case 'Sunny':
      return <FontAwesomeIcon icon="fa-solid fa-sun" />;
      break;
    case 'Rainy':
      return <FontAwesomeIcon icon="fa-solid fa-cloud-moon-rain"/>;
      break;
    case 'Snowing':
      return <FontAwesomeIcon icon="fa-solid fa-snowflake" />
      break;
    case 'Partial':
      return <FontAwesomeIcon icon="fa-solid fa-sun-cloud" />
      break;
    default:
      return <FontAwesomeIcon icon="fa-solid fa-sun-cloud" />
  }}



}}
