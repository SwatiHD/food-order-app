import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const { Fragment } = require("react")

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals/>
    </Fragment>
}

export default Meals