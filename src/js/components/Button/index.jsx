import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.js';

const Button = ({label, disabled, onClick, style}) => {

    return (
        <RaisedButton
            label={label}
            onClick={onClick}
            primary={true}
            disabled={disabled}
            style={style.isNeighbor ? styles.neighborButton : styles.button}
        />
    )
};

export default Button;