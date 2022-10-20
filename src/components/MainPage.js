import React from 'react';
import "./mainPage.css";
import { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos, clearSearchData } from "../redux/Actions"



const MainPage = () => {
    const dispatch = useDispatch();
    const photosData = useSelector(state => state.photoReducer.photos)
    const [data, setData] = useState(photosData);
    const [searchTxt, setSearchTxt] = useState(null);
    const [page, setPage] = useState(1);
    const hasMore = true;

    useEffect(() => {
        dispatch(searchPhotos(searchTxt, page))
    }, [searchTxt, page, dispatch])

    useEffect(() => {
        setData(photosData);
    }, [photosData])


    const fetchImages = () => {
        setPage(page + 1);
    }

    const searchImages = (e) => {
        if (e.keyCode === 13) {
            setSearchTxt(e.target.value);
            setData([]);
            dispatch(clearSearchData())
        }
    }
    return (
        <div className="App flex">
            <input type="text" onKeyDown={(e) => searchImages(e)}
                placeholder="Search For Images" />
            <InfiniteScroll
                dataLength={data.length}
                next={() => fetchImages()}
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
                        data.map((imgObj, index) => (
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

export default MainPage







