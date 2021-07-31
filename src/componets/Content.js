import React from 'react'
import OptionContent from './OptionContent'
import "./Content.css"
import logo from "../imagess/istagram2.jpg"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
function Content() {
    return (
        <div className="Content">
            <div className="leftContent" >
                <div className="Option" >
                    <OptionContent />
                </div>
                <div className="full_card" >
                    <div className="topCard">
                        <div className="userpost">
                            <img src={logo} alt="" />
                            <p> name</p>
                        </div>
                        <div className="dottpost">
                            <MoreHorizIcon />
                        </div>
                    </div>
                    <div className="middleCard">
                        <img src={logo} alt="" />
                    </div>
                    <div className="endCard">
                        <div className="bottomtop">
                            <div className="bottomtop1">
                                <div className="botto5">
                                    < FavoriteBorderIcon />
                                </div>
                                <div className="botto5">
                                    <ChatBubbleOutlineOutlinedIcon />
                                </div>
                                <div className="botto5">
                                    <TelegramIcon />
                                </div>
                            </div>
                            <div className="bottomtop2" >
                                <TurnedInNotOutlinedIcon />
                            </div>

                        </div>
                        <div className="bottommiddle" >
                            mbili
                        </div>
                        <div className="bottombottom" >
                            <div className="imogi">
                                <SentimentSatisfiedOutlinedIcon />
                                <textarea placeholder="Add comment here" rows="3" cols="3"></textarea>
                            </div>

                            <div className="imog">
                                <h4>Post</h4>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className="rightContent" >
                <div className="containerrighttop" >
                    <div className="fitlogo">
                        <img src={logo} alt="" />

                    </div>
                    <div className="fittext">
                        <h4>ict458</h4>
                        <p> Michael P Kilongo </p>

                    </div>
                    <div className="fitbtn">
                        <a href="#">Switch</a>
                    </div>


                </div>
                <div className="containermiddletop" >
                    <div>
                        <p>suggestion for you</p>
                    </div>
                    <div>
                        <p>See All</p>
                    </div>
                </div>
                <div className="containerbottomtop" >
                    <div className="suggeston" >
                        <img src={logo} alt="" />
                    </div>
                    <div className="suggestionfi" >
                        <h4>michael</h4>
                        <p> follow you</p>

                    </div>
                    <div className="suggestio" >
                        <h5>follow</h5>

                    </div>
                </div>
                <div className="containerbottomtop" >
                    <div className="suggeston" >
                        <img src={logo} alt="" />
                    </div>
                    <div className="suggestionfi" >
                        <h4>michael</h4>
                        <p> follow you</p>

                    </div>
                    <div className="suggestio" >
                        <h5>follow</h5>

                    </div>
                </div>
                <div className="containerbottomtop" >
                    <div className="suggeston" >
                        <img src={logo} alt="" />
                    </div>
                    <div className="suggestionfi" >
                        <h4>michael</h4>
                        <p> follow you</p>

                    </div>
                    <div className="suggestio" >
                        <h5>follow</h5>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content
