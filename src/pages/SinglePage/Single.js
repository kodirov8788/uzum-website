import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import "./Single.scss"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
function Single() {

    const product = useLocation().state
    console.log(product)

    const [count, setCount] = useState(1)

    function incCount() {
        setCount(count + 1)
    }

    function uCount() {
        setCount(count - 1)
    }

    return (

        <div>
                <div className='single'>

                <div className="sing_img">
                    <div className='img_carts'>
                        <div className="img_cart"></div>
                        <div className="img_cart"></div>
                        <div className="img_cart"></div>
                    </div>
                    <img src={product.image} alt="" />

                </div>
                <div className='single_text'>
                    <div className='sing_bal'>
                        <div className='baxo'>

                            <p><AiFillStar style={{ color: "yellow" }} />4.9(176baxo)</p>
                            <p>Ko'proq 3500 buyurtma berish</p>
                        </div>
                        <div className='istak'>
                            <p><AiOutlineHeart className='yurak_icon' /> Istaklarga</p>
                        </div>
                    </div>
                    <div className='nom'>
                        <h3> {product.title}</h3 >
                        <div style={{ display: "flex" }}>
                            <div className="nom_sotuvchi">
                                <p>Sotuvchi</p>
                                <p>Yerkazib berish</p>
                            </div>

                            <div className="nom_sotuvchi">
                                <p style={{ textDecoration: "underline", cursor: "pointer" }}>PEGAS</p>
                                <p>1 kun bepul</p>
                            </div>
                        </div>
                    </div>

                    <div className='miqdor'>
                        <p>Miqdor:</p>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex" }} className='miqdor_btn'>
                                <button onClick={uCount}>-</button>
                                <p>{count}</p>
                                <button onClick={incCount}>+</button>

                            </div>
                            <p style={{ paddingTop: "22px", paddingLeft: "20px", color: "#52C89B" }}>Sotuvda 700 dona</p>
                        </div>

                        <div style={{ paddingTop: "30px" }} className='narx'>
                            <p>Narx:</p>
                            <p style={{ paddingTop: "5px", fontSize: "20px" }}>{product.price}$ <del style={{ paddingLeft: "10px", fontSize: "17px" }}>200$</del></p>
                        </div>

                        <div className='mudat'>
                            <p><span style={{ backgroundColor: "yellow" }}>Oyiga 1 680 so'mdan</span>  mudatli to'lov</p>
                        </div>


                        <div className='sav_btn'>
                            <button>Savatga qo'shish</button>
                            <button>Tugmani 1 boshishda xarid qilish</button>
                        </div>
                    </div>



                </div>
            </div>
        </div >


    )
}

export default Single