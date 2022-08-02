import React, { Component } from "react";
import PropTypes from 'prop-types'
import classes from "../BurgerIngredients/BurgerIngredients.module.css"

class BurgerIngredient extends Component{

    render () {
        let ingredients = null;

        switch (this.props.type) {
            case('bread-bottom'):
                ingredients = <div className={classes.BreadBottom}></div>
                break;
            case('bread-top'):
                ingredients = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case('meat'):
                ingredients = <div className={classes.Meat}></div>
                break;
            case('bacon'):
                ingredients = <div className={classes.Bacon}></div>
                break;
            case('cheese'):
                ingredients = <div className={classes.Cheese}></div>
                break;
            case('salad'):
                ingredients = <div className={classes.Salad}></div>
                break;
            default:
                ingredients = null
                break;
        }
        return ingredients
    }    

}
BurgerIngredient.propType = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
