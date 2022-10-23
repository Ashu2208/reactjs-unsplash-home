import React from 'react';
import "./searchModal.css";
import { ReactComponent as TrendIcon } from "../../images/TrendLogo.svg";

const trendingSearches = ["cooking", "night sky", "winter", "paper texture", "product"];
const trendingTopics = ["Current Events", "Texture & Patterns ", "Architecture", "Travel", "Wallpaper"];
const trendingCollections = ["Flat Lay Lifestyle", "MockUps", "Light Tones", "Medium frames in interior", "church"];

const SearchModel = () => {

    const hideModal = () => {
        document.querySelector(".searchModalContainer").classList.remove("active");
    }
    return (
        <div className='searchModalContainer' onMouseLeave={() => { hideModal() }}>
            <section className='trendSection'>
                {/* <button >Close</button> */}
                <p className='trendTitle'>Trending Searches</p>
                <div className='trendItems'>
                    {
                        trendingSearches.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={index} className='trendItem' href='#'><TrendIcon className='trendLogo' />{item}</a>
                            )
                        })
                    }
                </div>
            </section>
            <section className='trendSection'>
                <p className='trendTitle'>Trending Topics</p>
                <div className='trendItems'>
                    {
                        trendingTopics.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={index} className='trendItem' href='#'>{item}</a>
                            )
                        })
                    }
                </div>
            </section>
            <section className='trendSection'>
                <p className='trendTitle'>Trending Collections</p>
                <div className='trendItems'>
                    {
                        trendingCollections.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a key={index} className='trendItem' href='#'>{item}</a>
                            )
                        })
                    }
                </div>
            </section>

        </div>
    )
}

export default SearchModel