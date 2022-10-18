import { useState, useEffect } from "react"
import axios from 'axios';
import React from 'react';
import { BASE_URL, ACCESS_KEY, SECRET_KEY, SEARCH_URL } from "../redux/Constants";
import InfiniteScroll from "react-infinite-scroll-component";
import "./mainPage.css";


const MainPage = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState();
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchUrl = `${SEARCH_URL}?client_id=${ACCESS_KEY}&query=${query}&page=${page}`;

    // Page Load Effect
    useEffect(() => {
        const getImages = async () => {
            let response = await axios.get(`${BASE_URL}photos?client_id=${ACCESS_KEY}`)
            response = await response.data
            setData(response);
        }
        getImages();
    }, []);

    //Search Effect
    useEffect(() => {
        fetchImages();
    }, [query])

    const fetchImages = async () => {
        let response = await axios.get(fetchUrl, {
            headers: {},
        });
        response = await response.data;
        setData([...data, ...response.results]);
        setPage(page + 1);
    }

    const searchImages = (e) => {
        if (e.keyCode === 13) {
            setQuery(e.target.value);
            setData([]);
        }
    }



    return (
        <div className="App flex">
            <input type="text" onKeyDown={(e) => searchImages(e)}
                placeholder="Search For Images" />

            <InfiniteScroll
                dataLength={data.length}
                next={fetchImages}
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
                        data?.map((itm, index) => (
                            <div className="container" key={index}>
                                <img src={itm.urls.small} className="image" alt='userImage' />
                            </div>

                        ))
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default MainPage







