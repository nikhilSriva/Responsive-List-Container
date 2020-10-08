import React from "react";
import classes from './styles.module.css'
import {withRouter} from 'react-router-dom'
import CardSection from "../CardSection";
import {DATA} from "../../utilities/constants";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className={classes.Container}>
                    <CardSection data={DATA}/>
                </div>
            </>
        )
    }
}

export default withRouter(LandingPage)
