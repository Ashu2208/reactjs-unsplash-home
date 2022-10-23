import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import { ReactComponent as VisualSearchIcon } from "../../images/SearchLogo.svg";
import { useDispatch } from 'react-redux';
import { searchPhotos, clearSearchData } from "../../redux/Actions";


const SearchComponent = () => {
    const [searchTxt, setSearchTxt] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchPhotos(searchTxt, 1))
    }, [searchTxt, dispatch])

    const searchImages = (e) => {
        if (e.keyCode === 13) {
            setSearchTxt(e.target.value);
            dispatch(clearSearchData())
        }
    }
    const openModal = () => {
        document.querySelector(".searchModalContainer").classList.add("active");
    }

    return (
        <div className='searchContainer'>
            <MdSearch className='headerSearchIcon' />
            <input className='searchTxt' placeholder='Search photos'
                onKeyDown={(e) => searchImages(e)}
                onClick={() => openModal()} />
            <VisualSearchIcon className='headerVisualSearchIcon' />
        </div>
    )
}
export default SearchComponent