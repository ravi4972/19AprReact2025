export const ItemCard = (props)=>{
    const {name,tag,price,stock} = props
    return(
        <div className="itemcard">
            <div className="itemHeader">
                <img src="https://cdn.vectorstock.com/i/2000v/27/90/new-item-sign-or-stamp-vector-32342790.avif" alt="item-logo"/>
                <h2>{name}</h2>
                <h3>[{tag.join(",")}]</h3>
            </div>
            
            <div className="iteminfo">
                <div className="left-info">
                    <h3>Rs. {price}</h3>
                    <h3>Stock: {stock}</h3>
                </div>
                <div className="right-action">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}