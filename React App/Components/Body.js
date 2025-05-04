import {useEffect, useState} from 'react'

import { Items } from "./Items"
import {SearchItems} from './SearchItems'
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
        setItemsList(allItems.filter(i=>i.name.toLowerCase().includes(searchString.toLowerCase())))
    }
    
    return(
        <>
            <SearchItems filterItemList={filterItemList}/>
            <Items itemList={itemsList}/>
        </>
    )
}