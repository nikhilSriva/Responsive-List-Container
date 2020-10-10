import React from "react";
import classes from './styles.module.css'
import './styles.css'
import {Card} from 'react-bootstrap';
import {isEmpty} from 'lodash'
import {PLACEHOLDER} from "../../utilities/constants";
import {localeFormattedString} from "./utils";

const CardSection = ({data}) => {
    return (
        <div className={classes.FlexWrap}>
            {
                !isEmpty(data) && data.map(item => {
                    return (
                        <div className={classes.CardContainer}>
                            <Card className={classes.Card}>

                                <Card.Img className={classes.ImageContainer}
                                          alt={`Picture is ${item.title}`}
                                          src={item?.imageUrl || PLACEHOLDER}/>
                                <Card.Body className={classes.CardBody}>
                                    <label className={classes.ProductTitle}>{item.title}</label>
                                    <div className={classes.CardBodySection}>
                                        <div className={classes.Description}>{item.subTitle}</div>
                                    </div>
                                    <div className={classes.CardBodySection}>
                                        <div className={classes.PriceSection}>
                                            <p className={classes.OriginalPrice}>
                                                {localeFormattedString(item.price, 'en-IN', {
                                                    style: 'currency',
                                                    currency: 'INR'
                                                })}
                                            </p>
                                            {
                                                item.price !== item.discountedPrice ?
                                                    <>
                                                        <p className={classes.DiscountPrice}>
                                                            {localeFormattedString(item.price, 'en-IN', {
                                                                style: 'currency',
                                                                currency: 'INR'
                                                            })}
                                                        </p>
                                                        <p className={classes.DiscountPercent}>{item.discount}% OFF </p>
                                                    </>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    <div className={classes.CardBodySection}>
                                        <div className={classes.SizeSection}>
                                            {
                                                item.sizeVariation?.map(size => (
                                                    <p className={classes.Size}>
                                                        {size.title}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default React.memo(CardSection)
