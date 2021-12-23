import data from "./data";
import FoodList from "./components/FoodList"
import './App.css';

const handleDishDescription=(argument)=>{
 alert(argument)
};

const  App =()=> {
  const sortByPrice=data.dishes.sort((a, b)=>a.price-b.price)

  return (
    <div>
     <FoodList data= {sortByPrice} handleClick={handleDishDescription}/>
    </div>
  )
}

export default App;
