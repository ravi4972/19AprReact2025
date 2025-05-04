import { useState } from "react"

export const SearchItems =({filterItemList})=>{
    const [searchText,setSearchText] = useState('')
    return(
        <div className="searchContainer">
            <input type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
                if(e.target.value.length>=3){
                    filterItemList(e.target.value)
                } 
            }}></input>
            <button onClick={()=>filterItemList(searchText)}>Search</button>
        </div>
    )
}