import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../index.css';
import { IconName } from 'react-icons/fa';

export default function Icon(props) {
  {
    switch (props.icon) {
      case 'Cloudy':
        return <FontAwesomeIcon icon='fa-solid fa-sun-cloud' />;
        break;
      case 'Sunny':
        return <FontAwesomeIcon icon='fa-solid fa-sun' />;
        break;
      case 'Rainy':
        return <FontAwesomeIcon icon='fa-solid fa-cloud-moon-rain' />;
        break;
      case 'Snowing':
        return <FontAwesomeIcon icon='fa-solid fa-snowflake' />;
        break;
      case 'Partial':
        return <FontAwesomeIcon icon='fa-solid fa-sun-cloud' />;
        break;
      default:
        return <FontAwesomeIcon icon='fa-solid fa-sun-cloud' />;
    }
  }
}
