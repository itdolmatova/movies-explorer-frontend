import React from 'react';
import iconPath from '../../images/tumbler.svg';
import './Tumbler.css';

function Tumbler(props) {

    function handleClick() {
        if (props.isOn) {
            props.handleChange(false);
        } else {
            props.handleChange(true);
        }
    };

    return (
        <div className="tumbler__container">
            <div className={`tumbler__button ${props.isOn ? "tumbler__button_on" : "tumbler__button_off"}`} onClick={handleClick}>
                <img className={`tumbler__icon ${props.isOn ? "tumbler__icon_on" : "tumbler__icon_off"}`} src={iconPath} />
            </div>
            <p className="tumbler__name">{props.name}</p>
        </div>
    );
}

export default Tumbler;

