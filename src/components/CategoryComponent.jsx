import React from "react";

export default function CategoryComponent(){
    return(
        <div className="category--container">
            <div className="positive--container">
                <h3>Positive</h3>
            </div>
            <div className="neutral--container">
                <h3>Neutral</h3>
            </div>
            <div className="negative--container">
                <h3>Negative</h3>
            </div>
        </div>
    )
}