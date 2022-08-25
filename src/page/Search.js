import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div>

            {/* search 기능 */}
            <div className='search-box'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                <input className='search' type='text' />
            </div>
        </div>
    )
}

export default Search