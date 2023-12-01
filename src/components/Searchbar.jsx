import React, { useEffect, useState } from 'react'

export const Searchbar = ({dropDownList}) => {
    const [searchField, setSearchField] = useState('')
    const [showDropdown, setShowDropdown] = useState(false);    

    const onChanges = (e)=>{
        setSearchField(e.target.value)
        setShowDropdown(true)
    }

    const onClicks = (e) =>{
        setSearchField(e.target.textContent);
        setShowDropdown(false); 
    }

    const filter = dropDownList.filter(item =>{
        return item.toLowerCase().includes(searchField.toLocaleLowerCase())
    })


  return (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full p-12">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Placeholder
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        placeholder="Search" 
        value={searchField} 
        onChange={onChanges}/>
            <ul className={`${showDropdown ? '' : 'hidden'} max-h-40 overflow-y-auto`}>
                        {filter.map((items, index)=>{
                return(
                    <div key={index} onClick={onClicks}>{items}</div>
                )
            })}
        </ul>
        </div>
    </div>
  )
}
