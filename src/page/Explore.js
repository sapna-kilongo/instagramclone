import React from 'react'
import Header from '../componets/Header'
import './Explore.css'
import movie from "../imagess/movies.mp4"
import image from "../imagess/images.png"
import mika from "../imagess/mika.jpg"
import insta from "../imagess/istagram2.jpg"

function Explore() {
    return (
        <div>
            <Header />
            <div className="explore">
                <div className="left_explore">
                    <div className="top">
                        <img src={mika} alt=""/>
                    </div>
                    <div className="bottom">
                       <img src={insta} alt=""/>
                    </div>

                </div>
                <div className="right_explore">
                    <video width="500" height="600" controls>
                        <source src={movie} type="video/mp4"/>
                        
                    </video>

                </div>
            </div>
            <div className="explore">
                <div className="left">
                    <img src={mika} alt=""/>

                </div>
                <div className="middle">
                    <img src={image} alt=""/>
                </div>
                <div className="right">
                <img src={insta} alt=""/>
                </div>
            </div>
            <div className="explore">
                <div className="left_explore">
                    <div className="top">
                        <img src={mika} alt=""/>
                    </div>
                    <div className="bottom">
                       <img src={insta} alt=""/>
                    </div>

                </div>
                <div className="right_explore">
                    <video width="500" height="600" controls>
                        <source src={movie} type="video/mp4"/>
                        
                    </video>

                </div>
            </div>
            <div className="explore">
                <div className="left">
                    <img src={mika} alt=""/>

                </div>
                <div className="middle">
                    <img src={image} alt=""/>
                </div>
                <div className="right">
                <img src={insta} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Explore
