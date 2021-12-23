import data from "./data";
import FoodList from "./components/FoodList"
import './App.css';

const  App =()=> {
  return (
    <div>
     <FoodList {...data}/>
    </div>
  )
}

export default App;
