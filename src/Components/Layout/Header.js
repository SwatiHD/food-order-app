import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from "./Header.module.css"
import mealsImage from "../../Assets/meals.jpg"

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes.main_image}>
                <img src={mealsImage} alt='A table full of delicious food'/>
            </div>
        </Fragment>
    )
}

export default Header