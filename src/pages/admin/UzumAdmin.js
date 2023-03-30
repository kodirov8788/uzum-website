import React, { useState } from 'react'
import './UzumMedia.scss'
import './UzumAdmin.scss'
// import UzAdmin from '../../images/UzumAdmin.png'

function UzumAdmin() {
    const [inputData, setInputData] = useState({
        ProductName: "",
        Information: "",
        Price: 0
    })
    // const [load, setLoad] = useState(false)
    console.log(inputData)

    const SentBlog = async (e) => {
        e.preventDefault()
        // setLoad(true)
        // UploadImage()
    }
    async function SendFirebase(imgLink) {

        if (inputData.ProductName === "" || inputData.Information === "" || inputData.Price === 0) {
            alert("joylarni toldiring!")
        } else {
            await {
                CarName: inputData.CarName,
                Information: inputData.Information,
                Price: inputData.Price,
            }
        }
    }
    const GetImage = (e) => {
        // setImageUpload(e.target.files[0])
        console.log(e.target.files[0])
    }
    return (
        <div className="admin-page">
            <>{
                <form action="" onSubmit={ SentBlog }>

                    <div className="admin-img">
                        <img src='https://seller.uzum.uz/manual/uzum.svg' alt="" />
                    </div>
                    <label htmlFor="">ProductName</label>
                    <input onChange={ (e) => setInputData({ ...inputData, ProductName: e.target.value }) } className='input' type="text" placeholder='ProductName...' />

                    <label htmlFor="">Information</label>
                    <input type="text" onChange={ (e) => setInputData({ ...inputData, Information: e.target.value }) } placeholder='Information' />
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={ (e) => setInputData({ ...inputData, Price: e.target.value }) } placeholder='Price' />

                    <input className="custom-file-input" type="file" onChange={ GetImage } />

                    <button>Goo</button>

                </form>

            }
            </>

            <div className="uzum-bac">
                <img src="https://play-lh.googleusercontent.com/HrSi4kDk4G7SfiOGcZxDyL2q2wbV4wvMHcnBJqvR37nl_uF7vQIHTB8_B1vkL0rv3G4f" alt="" />
            </div>
        </div>
    )
}

export default UzumAdmin