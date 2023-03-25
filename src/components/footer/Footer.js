import React from 'react'
import './Footer.scss';
import { AiOutlineApple } from "react-icons/ai"
import { BsGooglePlay } from 'react-icons/bs'
import { FaInstagramSquare } from "react-icons/fa"
import { BsTelegram } from "react-icons/bs"
import { FaYoutubeSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
function Footer() {
    return (
        <div className='container'>
            <button> <h2>Yana ko'rsatish 20</h2></button>
            <div className="boxs">
                <div className="box">
                    <h3>Biz haqimizda</h3>
                    <p>Topshiriq punkitlari</p>
                    <p>Vakansiyalar</p>
                </div>
                <div className="box2">
                    <h3>Foydalanuvchilarga</h3>
                    <p>Biz bilan bog'lanish</p>
                    <p>Savol-javob</p>
                </div>
                <div className="box3">
                    <h3>Tadbirkorlar</h3>
                    <p>Uzunda soting</p>
                    <p>sotuvchi kabinetiga kirish</p>
                </div>
                <div className="box4">
                    <h5>Ilovani yuklab olish</h5>
                    <div className="small_box">
                        < AiOutlineApple className='one' />
                        <p>App store</p>
                        <BsGooglePlay className='one' />
                        <p>Google play</p>
                    </div>
                    <p className='p'>Uzum ijtimoiy tarmqlarda</p>
                    <div className="icons">
                        <FaInstagramSquare className='two' />
                        <BsTelegram className='two' />
                        <FaYoutubeSquare className='two' />
                        <FaFacebookSquare className='two' />
                    </div>

                </div>
            </div>
            <hr />
            <div className="bottom">
                <h6>Maxfiylik kelishuvi</h6>
                <h6>Foydalanuvchi kelishuvi</h6>
                <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>

            </div>

        </div >
    )
}

export default Footer