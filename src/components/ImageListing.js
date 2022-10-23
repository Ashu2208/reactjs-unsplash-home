import React from 'react';
import "./imageListing.css";
import { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos } from "../redux/Actions";



const ImageListing = () => {
    const dispatch = useDispatch();
    const photosData = useSelector(state => state.photoReducer.photos);
    const searchedText = useSelector(state => state.photoReducer.searchedText);
    const [searchTxt, setSearchTxt] = useState(searchedText);
    const [page, setPage] = useState(1);
    const hasMore = true;

    useEffect(() => {
        dispatch(searchPhotos(searchTxt, page))
    }, [page, dispatch, searchTxt])

    useEffect(() => {
        setSearchTxt(searchedText);
    }, [photosData, searchedText])


    const fetchNextImages = () => {
        setPage(page + 1);
    }

    return (
        <div className="App flex">
            <InfiniteScroll
                dataLength={photosData.length}
                next={() => fetchNextImages()}
                hasMore={hasMore}
                loader={<p>Load more...</p>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="main flex">
                    {
                        photosData.map((imgObj, index) => (
                            <div className="container" key={index}>
                                <img src={imgObj.urls.small} className="image" alt='userImage' />
                            </div>

                        ))
                    }
                </div>

            </InfiniteScroll>
        </div>
    )
}

export default ImageListing







