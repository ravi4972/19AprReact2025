export const ItemCard = (props)=>{
    const {name,tag,price,stock} = props
    return(
        <div className="itemcard">
            <img src="https://cdn.vectorstock.com/i/2000v/27/90/new-item-sign-or-stamp-vector-32342790.avif" alt="item-logo"/>
            <h2>{name}</h2>
            <h3>{tag.join(",")}</h3>
            <h3>Rs. {price}</h3>
            <h3>{stock}</h3>
        </div>
    )
}