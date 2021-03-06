import React, {useState} from "react";
import classes from './styles.module.css'
import {Loader} from "../Loader";

export const SearchBar = ({onChangeText, isLoading}) => {
    const [query, setQuery] = useState('');
    return (
        <div id={'searchBar'} className={classes.SearchBarContainer}>
            <div className={classes.InputContainer}>
                <input
                    className={classes.Input}
                    value={query}
                    type='text'
                    placeholder={'Search product title'}
                    onChange={(event) => {
                        setQuery(event.target.value)
                        onChangeText(event.target.value)
                    }}/>
                {
                    isLoading && <Loader/>
                }
            </div>
        </div>
    )
};
