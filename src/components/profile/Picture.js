import React from 'react';

export default function Picture({ name }) {
    return (
        <div className="picture">
            <div className="picture__cover"></div>
            <div className="picture__avatar">
                <div className="picture__avatar-text">{ name.charAt(0) }</div>
            </div>
            <h1 className="picture__name">{ name }</h1>
            <br></br>
            <br></br>
        </div>
    )
}
