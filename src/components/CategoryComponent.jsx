import React from "react";

export default function CategoryComponent(){
    return(
        <div className="category--container">
            <div className="positive--container">
                <div className="category--header">
                    <h3>Positive</h3>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className="category--list">
                    <div className="category--item--positive">
                        <span className="category--item--name">Smoking</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="neutral--container">
                <div className="category--header">
                    <h3>Neutral</h3>
                    <i class="fa-solid fa-equals"></i>
                </div>
                <div className="category--list">
                    <div className="category--item--neutral">
                        <span className="category--item--name">Smoking</span>
                        <i class="fa-solid fa-equals"></i>
                    </div>
                </div>
            </div>
            <div className="negative--container">
                <div className="category--header">
                    <h3>Negative</h3>
                    <i class="fa-solid fa-minus"></i>
                </div>
                <div className="category--list">
                    <div className="category--item--negative">
                        <span className="category--item--name">Smoking</span>
                        <i class="fa-solid fa-minus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}