import React from "react";
import './style.css'

export const Filters = () => {

    const data = [
        {},
        {},
        {}
    ]
    return (
        data.map((item, index) => {
            return (
                <div className={"select"}>
                    <div className="select_head">
                        All Languages
                    </div>
                    <div className={"select_body"}>
                        <ul>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            )
        })
    )
}
