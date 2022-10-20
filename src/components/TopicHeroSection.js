import React, { useState, useEffect } from 'react';
import "./topicHeroSection.css";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ACCESS_KEY, RANDOM_PHOTOS_URL } from "../redux/Constants"


const TopicHeroSection = () => {
    const [imageStyle, setImageStyle] = useState({})
    const topic = useSelector(state => state.topicReducer.topic);
    let loaded = (Boolean(topic?.cover_photo?.urls?.regular));


    if (loaded) {
        async function getRandomPhoto() {
            let query = `${RANDOM_PHOTOS_URL}/?client_id=${ACCESS_KEY}&topics=${topic.title}`
            let response = await axios.get(query);
            response = await response.data;
            setImageStyle({ backgroundImage: `url(${response.urls.regular})` })
        }
        getRandomPhoto();

    }

    return (
        <div className='container'>
            <div className='heroSectionContainer' style={imageStyle}>
                <div className='backShadow'>
                    <div className='heroContent'>
                        <div className='topicDetail'>
                            <span className='topicTitle'>{topic.title}</span>
                            <span className='topicDescription'>{topic.description}</span>
                            <button className='topicSubmit'>Submit to <b> {topic.title} </b></button>
                        </div>
                    </div>

                    <div className='heroFooter'>
                        <span >Photo by Person</span>
                        <span >Read more about the Unsplash Licence</span>
                        <span >Extra Detail If Any</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicHeroSection