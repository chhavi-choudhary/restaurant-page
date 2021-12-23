const FoodItem=({foodImage,description,itemName,featured,price, handleOnClick})=>{
    return(
        <div className="container">
            <div>
            <div className="container-item">
            <div className="image">
            <img src={foodImage} alt="food"/>
            </div>
            <div className="item">
            <p>{itemName}</p>
            <p>{description}</p>
            </div>
            <div className="price">
            <p className="star">{featured?'*':null}</p>
            <p>{price}</p>
            <button onClick={()=>handleOnClick(description)}>Dish Discription</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default FoodItem;