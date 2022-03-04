import React from "react";
import './style.css'
import {
    Button,
} from "../button";

export const Main = () => {
    return (
        <div className={'main'}>
            <div className={'container main-container'}>
               <div className={"watchlist-block"}>
                   <h1 className={'watchlist_name'}>Watchlist Name</h1>
                   <Button/>
               </div>
                <div className="sidebar">
                    sidebar
                </div>
            </div>
        </div>
    )
}
