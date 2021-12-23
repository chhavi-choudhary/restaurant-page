const FoodItem=({foodImage,description,itemName,featured,price})=>{
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
            </div>
            </div>
            </div>
        </div>
    )
}
export default FoodItem;