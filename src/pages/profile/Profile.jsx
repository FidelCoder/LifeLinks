import React from "react";
import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import CoinIcon from "@mui/icons-material/MonetizationOn"; // Coin icon for LinkCoins

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Cover"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="Profile"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span className="userName">Jane Doe</span>
            <div className="bio">Passionate about tech and community building. Proud member of LifeLinks!</div> {/* User Bio */}
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>LifeLinks.dev</span>
              </div>
              <div className="item">
                <CoinIcon />
                <span>500 LinkCoins</span> {/* User's LinkCoin Balance */}
              </div>
            </div>
            <button className="followBtn">Follow</button>
            <button className="linkCoinBtn">Collect LinkCoins</button> {/* Button to collect LinkCoins */}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
