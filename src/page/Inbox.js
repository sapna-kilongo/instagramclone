import React from 'react'
import Header from '../componets/Header'
import "./inbox.css"
import Telegram from '@material-ui/icons/Telegram'
import { ExpandMore } from '@material-ui/icons'
import { PostAdd } from '@material-ui/icons'

function Inbox() {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="left_container" >
                    <div className="top_left_container">
                        <div className="text">
                            <h5>ict458</h5>
                            <ExpandMore />
                        </div>

                        <PostAdd />
                    </div>
                    <div className="bottm_left_container"  >

                    </div>

                </div>
                <div className="right_container" >
                    <div className="circle">
                        <div className="Tekegram">
                            < Telegram />
                        </div>

                    </div>
                    <h1>Your messages</h1>
                    <p>Send private photos and messages to a friend or group.</p>
                    <button type="submit">Send Message</button>

                </div>


            </div>
        </div>
    )
}

export default Inbox
