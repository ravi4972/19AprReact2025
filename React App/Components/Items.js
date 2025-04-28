import {items} from '../static/items'
import {ItemCard} from './ItemCard'
export const Items = ()=>{
    return(
        <div className="itemsContainer">
            {items.map((i)=>{
                return (<ItemCard name={i.name} tag={i.tag} price={i.price} stock={i.stock}/>)
            })}
        </div>
    )
}