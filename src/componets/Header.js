import React from 'react'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import logo from "../imagess/images.png"
import profile from "../imagess/mika.jpg"
import "./Header.css"
import { Link} from "react-router-dom"

// import Explore from "../pages/Explore"
// import Inbox from "../pages/nbox"



function Header() {
    return (
        
            <div className="Instagram_Header">

                <img className="logo" src={logo} alt="" />

                <div className="search">
                    <input type="text" name="" value="" />
                    <SearchOutlinedIcon />
                </div>

                <div className="tools">

                    <div className="home" >
                        <Link to="/">
                            <HomeOutlinedIcon />
                        </Link>

                    </div>
                    <div className="home" >
                       <Link to="/inbox">
                             <TelegramIcon />
                       </Link>
                        
                    </div>
                    <div className="home" >
                        <Link to="/explore">
                             < ExploreOutlinedIcon />
                        </Link>
                        
                    </div>
                    <div className="home" >
                        <Link to="/favorite">
                          <FavoriteBorderIcon />
                        </Link>
                        
                    </div>
                    <div className="homeImage" >
                        <img src={profile} alt="" />
                    </div>
                </div>
                 
               

            </div>
        
    )
}

export default Header
