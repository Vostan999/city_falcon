import React from "react";
import './style.css'
import city_falcon_logo from '../../assets/image/city_falcon_logo.png'

export const Header = () => {
    return (
        <div className={'header'}>
            <div>
                <img src={city_falcon_logo} alt={'no image'} className={'city_falcon_logo'}/>
            </div>
            <div className={'avaava3xDiv'}>
                <img src={city_falcon_logo} alt={'no image'} className={'profile_image'}/>
                <p className={'icon'}>f</p>
            </div>
        </div>
    )
}
