import React, { useState } from 'react';
import iconPath from '../../images/tumbler.svg';
import './Tumbler.css';

function Tumbler(props) {

    const [isOn, setIsOn] = useState(true);

    function handleClick(){
        if(isOn) {
            setIsOn(false);
        } else {
            setIsOn(true);
        }
    };

    return (
        <div className={`tumbler__button ${isOn? "tumbler__button_on": "tumbler__button_off"}`} onClick={handleClick}>
            <img className={`tumbler__icon ${isOn? "tumbler__icon_on": "tumbler__icon_off"}`}  src={iconPath} />
        </div>
    );
}

export default Tumbler;

