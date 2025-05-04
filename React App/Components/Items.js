import {ItemCard} from './ItemCard'
export const Items = ({itemList})=>{
    return(
        <div className="itemsContainer">
            {itemList.map((i)=>{
                return (<ItemCard key={i.id} name={i.name} tag={i.tag} price={i.price} stock={i.stock}/>)
            })}
        </div>
    )
}