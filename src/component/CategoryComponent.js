import React from 'react'

export default function CategoryComponent({ categoryList }) {

  return (
    <div className='category-box'>
      <div className='category-top'>
      <ul className='category-ul'>
          {categoryList.map((list) => (
            <li className='category-li' >{list.name}</li>
          ))}
        </ul>
      </div>

      <div className='category-list-box'>
        <ul className='category-ul'>
          {categoryList.map((list) => (
            <li className='category-li'>{list.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
