import {useEffect, useState} from 'react'

import { Items } from "./Items"
import {SearchItems} from './SearchItems'
import ShimmerCard from './Shimmer'
import {fetchItemsList} from '../utils/itemsApi'

export const Body= ()=>{
    console.log("body rendered")
    const [itemsList, setItemsList] = useState([])
    const [allItems, setAllItems] = useState([])

    useEffect(()=>{
        console.log('use effect called')
        fetchItemsList().then((data)=>{
            setItemsList(data)
            setAllItems(data)
        })
        
    },[])

    function filterItemList(searchString){
        console.log('Item search clicked',searchString)
        if(searchString.length){
            setItemsList(allItems.filter(i=>i.name.toLowerCase().includes(searchString.toLowerCase())))
        } else{
            setItemsList(allItems)
        }
    }
    
    return(
        <>
            <SearchItems filterItemList={filterItemList}/>

            {itemsList.length === 0 ? (
                <div className="itemsContainer">
                    {[...Array(6)].map((_, i) => <ShimmerCard key={i} />)}
                </div>
                ) : (
                <Items itemList={itemsList} />
            )}
        </>
    )
}