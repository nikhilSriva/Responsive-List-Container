import React from "react";
import classes from './styles.module.css'
import {withRouter} from 'react-router-dom'
import CardSection from "../CardSection";
import {AxiosSingleton} from '../../components'

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        AxiosSingleton.getInstance()
            .get('https://kpr84j7mce.execute-api.ap-south-1.amazonaws.com/Prod/?query=')
            .then(res => {
                console.log(res)
                if ((res.status === 200) && res.data?.length !== 0)
                    this.setState({data: res.data})
            })
            .catch(e => {

            })
    }

    render() {
        return (
            <>
                <div className={classes.Container}>
                    <CardSection data={this.state.data}/>
                </div>
            </>
        )
    }
}

export default withRouter(LandingPage)
