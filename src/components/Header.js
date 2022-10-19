import React from 'react';
import { useRef } from 'react';
import "./Header.css";
import { MdSearch, MdNotifications, MdList } from "react-icons/md";
import { FaUserCircle, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ReactComponent as VisualSearchIcon } from "../images/SearchLogo.svg";
import { ReactComponent as NotifyIcon } from "../images/BailLogo.svg"
import logo from "../images/unsplashLogo.png";
import { imageCategory } from "./imageCategory";


const Header = () => {
    const ref = useRef(null);
    const handleClick = (shift) => {
        ref.current.scrollLeft += +shift;
    };


    return (
        <div className='headerContainer'>
            <section className='headerRow1'>
                <div className='companyLogo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='searchContainer'>
                    <MdSearch className='headerSearchIcon' />
                    <input className='searchTxt' placeholder='Search photos' />
                    <VisualSearchIcon className='headerVisualSearchIcon' />
                </div>
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

            <section className='headerRow2'>
                <div className='mainLinks'>
                    <a href="#" className='imageCategory'>Editorial</a>
                    <a href="#" className='imageCategory'>Following</a>
                    <div className='hDivider'></div>

                </div>
                <FaAngleLeft className='arrowLeft' onClick={() => handleClick(-150)} />
                <div className='shadowLeft'></div>
                <div className='imageCategoryList' ref={ref}>

                    {
                        imageCategory.map((item, index) => {
                            return (
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a href="#" key={index} className='imageCategory'>{item}</a>

                            )
                        })
                    }

                </div>
                <div className='shadowRight'></div>
                <FaAngleRight className='arrowRight' onClick={() => handleClick(150)} />
            </section>


        </div>
    )
}

export default Header