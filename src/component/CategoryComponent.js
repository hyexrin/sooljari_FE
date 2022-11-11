import React from 'react'

export default function CategoryComponent({ categoryList, selected, setSelected }) {

  return (
    <div className='category-box'>
      <div className='category-top'>
      <ul className='category-ul'>
          {categoryList.map((list) => (
            <li className='category-li' key={list.id} onClick={() => setSelected(list.name)}>{list.name}</li>
          ))}
        </ul>
      </div>

      {/* <div className='category-list-box'>
        <ul className='category-ul'>
          {categoryList.map((list) => (
            <li className='category-li' key={list.id} onClick={() => setSelected(list.name)}>{list.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}
