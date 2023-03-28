import React from 'react'
import { AiFillStar } from "react-icons/ai"
import "./Cards.scss"
import img from "../../images/img.png"
import json from "../../../src/StaticData"
function Cards() {
    //     {
    //        
    //         title: 'Erkaklar futbolkasi Base Unisex qisqa yengli',
    //         baho: '4.6(444baho)',
    //         del: '89000 so`m',
    //         btn: '19000 so`m'
    //     },


    // ]
    return (
        <div className='cards'>
            <h1 className='cardsTextFont'>Uydan chiqmasdan ro’zg’or     </h1>
            <div className="number">
                {
                    json.map((json, inx) => {
                        return (<div className="cardsItem">
                            <div className="cardsItenImg">
                                <img src={json.img} alt="" />
                            </div>
                            <p className='textFont'>{json.title} </p>
                            <AiFillStar className='cardsIcons' />
                            <span>{json.price}</span>
                            <br />
                            <button className='cardsBtn'>{json.btnPrice}</button>

                            <br />
                            <del className='del'>{json.sale}</del>
                            <div className="divs">
                                <p className='purple'>{json.narxi}</p>
                                <img src={img} alt="" />
                            </div>
                        </div>)
                    })
                }
            </div>


        </div>
    )
}

export default Cards