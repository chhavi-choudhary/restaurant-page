import FoodItem from "./FoodItem";

const FoodList  =({dishes})=>{
    return(
        
            <div className="food-list">
            <p className="title">Restaurant For All</p>
          {dishes.map(dish=> <FoodItem {...dish}key={dish.itemName}/>)}
        
        </div>
    )
}
export default FoodList;