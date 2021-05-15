import React from 'react';


const SearchBox = (props) => {
    return(
        <div className="col col-sm-4 ">
            <input className='form-control bg-dark text-light' 
            value={props.value} 
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type to search any movie...'></input>
        </div>
    )
}

export default SearchBox;