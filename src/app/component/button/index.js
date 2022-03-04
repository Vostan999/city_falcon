import React from "react";
import './style.css'
import {Filters} from "../filters";
import ReportWebVitals from "../../../reportWebVitals";

export const Button = () => {

    return (
        <>
            <div className={'button_div'}>
                <div className={'refresh_button'}>
                    <img className={'button_image_refresh'}/>
                    <span className={'text_style_refresh'}>Refresh</span>
                </div>
                <div>
                    <div className={'filter_button'}>
                        <img className={'button_image_filter'}/>
                        <span className={'text_style_filters'}>Filters</span>
                    </div>
                </div>
            </div>
            <div className={"filters_selects"}>
            <Filters/>
            <div className={'reset_div'}>
                <p className={'reset_text'}>RESET</p>
            </div>
            </div>
        </>

    )
}
