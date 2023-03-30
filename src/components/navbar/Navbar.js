import React from 'react'
import "./Navbar.scss"
import logo from "../../images/logo.svg"
import { HiRectangleGroup } from "react-icons/hi2"
import { BiUser } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsFillBagCheckFill, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="">
                <div className="nav_bars">
                    <FaBars />
                </div>
            </div>
            <div className="nav_logo">
                <img src={ logo } alt="" />
            </div>
            <div className="nav_menu">
                <div className="rect_icon">
                    <HiRectangleGroup className='hirec' />
                    <h2>Katalog</h2>
                </div>
                <div className="nav_input">
                    <input type="text" placeholder='Искать товары и категории' />
                    <div className="nav_input_icon">
                        <BsSearch />
                    </div>
                </div>
            </div>
            <div className="nav_end">
                <div className="">
                    <BiUser />
                    <h2>
                        <a href="admin">Kirish</a>
                    </h2>
                </div>
                <div className="">
                    <AiOutlineHeart />
                    <h2>Saralangan</h2>
                </div>
                <div className="">
                    <BsFillBagCheckFill />
                    <h2>Savat</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar