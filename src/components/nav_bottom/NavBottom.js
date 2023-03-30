import React from 'react'
import "./NavBottom.scss"
import { BsChevronDown } from "react-icons/bs"

function NavBottom() {
    return (
        <div className='nav_bottom'>
            <div className='text1'>
                <h2><a href="/">Elektronika</a></h2>
            </div>
            <div className='text2'>
                <h2><a href="/">Maishiy Texnika</a></h2>
            </div>
            <div className='text3'>
                <h2><a href="/">Kiyim</a></h2>
            </div>
            <div className='text4'>
                <h2><a href="/">Poyabzallar</a></h2>
            </div>
            <div className='text5'>
                <h2><a href="/">Aksessuarlar</a></h2>
            </div>
            <div className='text6'>
                <h2><a href="/">Go'zallik</a></h2>
            </div>
            <div className='text7'>
                <h2><a href="/">Salomatlik</a></h2>
            </div>
            <div className='text8'>
                <h2><a href="/">Uy-Rozg'or Buyumlari</a></h2>
            </div>
            <div className='text9'>
                <h2><a href="/">Qurilish va Tamirlash</a></h2>
            </div>
            <div className='text10'>
                <h2><a href="/">Avtotavarlar</a></h2>
            </div>
            <div className='text11'>
                <h2><a href="/">Bolalar tavarlari</a></h2>
            </div>
            <div className='text12'>
                <h2><a href="/">Yana<BsChevronDown /></a></h2>
            </div>
        </div>
    )
}

export default NavBottom