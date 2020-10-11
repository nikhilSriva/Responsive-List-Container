import React from "react";
import classes from './styles.module.css'
import {withRouter} from 'react-router-dom'
import CardSection from "../CardSection";
import {fetchProducts, scrollToTop} from "./utils";
import {SearchBar} from "../../components/SearchBar";
import {Loader} from "../../components";
import {ReactSVG} from "react-svg";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1
        }
    }

    fetchData = (query = '', page = 1, clearData) => {
        this.setState({loading: true});
        fetchProducts(query, page)
            .then(data => {
                this.setState({data: clearData ? data : [...this.state.data, ...data], loading: false, loadMore: false})
            })
            .catch(e => {
                this.setState({loading: false, loadMore: false})
            })
    };

    componentDidMount() {
        this.fetchData();
        scrollToTop()
        this.setupIntersectionObserver();
        this.setupScrollToObserver();
    }

    setupScrollToObserver = () => {
        let el = document.getElementById('loader');
        let context = this;
        let observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    context.setState((state) => ({loadMore: true, page: state.page + 1}), () => {
                        context.fetchData('', context.state.page)
                    })
                }
            });
        }, {
            threshold: 1.0
        });
        observer.observe(el);
    };


    setupIntersectionObserver = () => {
        let el = document.getElementById('searchBar');
        let context = this;
        let observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    context.setState({showScrollToWidget: true});
                } else
                    context.setState({showScrollToWidget: false});
            });
        }, {
            threshold: 1.0
        });
        observer.observe(el);
    };

    render() {
        return (
            <div className={classes.AppContainer}>
                <SearchBar
                    debounce={true}
                    isLoading={this.state.loading}
                    onChangeText={(query) => {
                        this.fetchData(query, 1, true);
                    }}
                />
                <div className={classes.Container}>
                    {this.state.loading && <div className={classes.Overlay}/>}
                    <CardSection data={this.state.data}/>
                </div>
                <div id={'loader'} className={classes.LoadMore}>
                    {this.state.loadMore && <Loader class={classes.Loader}/>}
                </div>
                {
                    this.state.showScrollToWidget && <div
                        className={classes.ScrollToButton}
                        style={{
                            top: document.documentElement.clientHeight - 100,
                        }}>
                        <ReactSVG
                            onClick={() => {
                                scrollToTop()
                                this.setState({showScrollToWidget: false})
                            }}
                            beforeInjection={svg => {
                                svg.classList.add(classes.Logo)
                            }}
                            src={require('../../assets/arrow.svg')}
                        />
                    </div>}

            </div>
        )
    }
}

export default withRouter(LandingPage)
