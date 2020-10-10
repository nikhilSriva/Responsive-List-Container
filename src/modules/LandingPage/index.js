import React from "react";
import classes from './styles.module.css'
import {withRouter} from 'react-router-dom'
import CardSection from "../CardSection";
import {fetchProducts} from "./utils";
import {SearchBar} from "../../components/SearchBar";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fetchData = (query = '') => {
        this.setState({loading: true});
        fetchProducts(query)
            .then(data => {
                this.setState({data, loading: false})
            })
            .catch(e => {
            })
    };

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div className={classes.AppContainer}>
                <SearchBar
                    debounce={true}
                    isLoading={this.state.loading}
                    onChangeText={(query) => {
                        this.fetchData(query);
                    }}
                />
                <div className={classes.Container}>
                    {this.state.loading && <div className={classes.Overlay}/>}
                    <CardSection data={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage)
