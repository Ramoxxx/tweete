import React from 'react'
import './Card.css'

export default function Card(){
    return(
        <div className="card">
            <h1 className="title">Travis Scott</h1>
            <div class="ctnFlex">
            <div className="poster-image"></div>
            <div className="text">
            <h2 className="ig">@trvisXX</h2>
            <h3>ASTROWORLD</h3>
            <h1 className="amount">1.048 Tweets</h1>
            <h2 className="joined">Joined April 2010</h2>
            </div>
            </div>
            <a href="#" className="btn-view-twitter">View on twitter</a>
            <a href="#" className="btn-follow-us">Follow us on twitter</a>
            </div>
    )
}