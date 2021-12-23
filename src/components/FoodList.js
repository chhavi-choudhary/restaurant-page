import FoodItem from "./FoodItem";

const FoodList  =({data, handleClick})=>{
    return(
        
            <div className="food-list">
            <p className="title">Restaurant For All</p>
          {data.map(dish=> <FoodItem {...dish}key={dish.itemName} handleOnClick={handleClick}/>)}
        
        </div>
    )
}
export default FoodList;