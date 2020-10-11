import classes from "./styles.module.css";
import React from "react";

export const Loader = (props) => <div className={[classes.LoaderContainer, props.class].join(' ')}>
    <div className={classes.Loader}></div>
</div>;
