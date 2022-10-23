import React, { useRef, useEffect } from 'react';

import "./Header.css";
import { MdList } from "react-icons/md";
import { FaUserCircle, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ReactComponent as NotifyIcon } from "../images/BailLogo.svg"
import logo from "../images/unsplashLogo.png";
import SearchModel from '../components/models/SearchModel';
import { getTopics, getTopicDetail, getRandomTopicPhoto } from "../redux/Actions"
import { useDispatch, useSelector } from 'react-redux';
import SearchComponent from './customComponents/SearchComponent';

const Header = () => {
    const dispatch = useDispatch();
    const topics = useSelector(state => state.topicsReducer.topics)
    const ref = useRef(null);

    const handleClick = (shift) => {
        ref.current.scrollLeft += +shift;
    };

    useEffect(() => {
        dispatch(getTopics())
    }, [dispatch])

    const sendTopicDetails = (item) => {
        dispatch(getTopicDetail(item))
        dispatch(getRandomTopicPhoto(item))
    }

    return (
        <div className='headerContainer'>
            <section className='headerRow1'>
                <div className='companyLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <SearchComponent />
                <div className='headerMenuContainer'>
                    <ul className='menuList row'>
                        <li className='menuItem'>Advertise</li>
                        <li className='menuItem'>Blog</li>
                        <li className='menuItem unSplashPlus'>Unsplash+</li>
                        <li className='menuItem'><button className='submitPhotoBtn'>Submit a photo</button></li>
                        <li><NotifyIcon className='notifyIcon' /></li>
                    </ul>
                    <FaUserCircle className='userCircle' />
                    <MdList className='hamMenu' size={"40px"} color={"grey"} />
                </div>
            </section>
            {<SearchModel />}

            <section className='headerRow2' >
                <div className='mainLinks'>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className='imageCategory'>Editorial</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className='imageCategory'>Following</a>
                    <div className='hDivider'></div>

                </div>
                <FaAngleLeft className='arrowLeft' onClick={() => handleClick(-150)} />
                <div className='shadowLeft'></div>
                <div className='imageCategoryList' ref={ref}>

                    {
                        topics?.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <div key={index} >
                                    <div className='imageCategory' to={`/t/${item.slug}`} onClick={() => sendTopicDetails(item)}>
                                        {item.title}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='shadowRight'></div>
                <FaAngleRight className='arrowRight' onClick={() => handleClick(150)} />
            </section >


        </div >
    )
}

export default Header