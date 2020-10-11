import React from "react";
import classes from './styles.module.css'
import {ReactSVG} from "react-svg";

export const Header = ({onChangeText, isLoading}) => {
    return (
        <div className={classes.Header}>
            <ReactSVG
                beforeInjection={svg => {
                    svg.classList.add(classes.Logo)
                }}
                src={require('../../assets/nykaa_logo.svg')}
            />
        </div>
    )
};
