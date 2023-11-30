import React, { useState } from 'react'

export const Searchbar = ({dropDownList}) => {
    const [searchField, setSearchField] = useState('')

    const onChanges = (e)=>{
        setSearchField(e.target.value)
    }

    const onClicks = (e) =>{
        console.log(e)
        setSearchField(e)
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
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Search" value={searchField} onChange={onChanges}/>
      <ul hidden={(searchField == '')? true:false}>
        {filter.map((items, index)=>{
            return(
                <div key={index} onClick={()=>onClicks(items)}>{items}</div>
            )
        })}
      </ul>
    </div>
  </div>
  )
}
