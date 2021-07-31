import React from 'react'
import Header from '../componets/Header'
import "./favourite.css"
import mika from "../imagess/mika.jpg"

function Favorite() {
    return (
        <div className="favourite">
            <Header />
            <div className="favourite2" >
                <div className="text">
                    <h5>New</h5>
                </div>
                <div className="container">
                    <div className="proimage" >
                        <div className="img">
                            <img src={mika} alt="" />
                        </div>

                    </div>
                    <div className="protext">
                        <p>chidy.benga's profile picture
                            Your contact chidy benga is on Instagram as chidy.benga.4w
                        </p>

                    </div>
                    <div className="button"  >
                        <button type="submit">followed</button>
                    </div>

                </div>



            </div>
            <div className="favourite2" >
                <div className="text">
                    <h5>This month</h5>
                </div>
                <div className="container">
                    <div className="proimage" >
                        <div className="img">
                            <img src={mika} alt="" />
                        </div>

                    </div>
                    <div className="protext">
                        <p>chidy.benga's profile picture
                            Your contact chidy benga is on Instagram as chidy.benga.4w
                        </p>

                    </div>
                    <div className="button"  >
                        <button type="submit">followed</button>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default Favorite
