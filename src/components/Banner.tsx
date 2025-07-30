import React from "react";
import "./Banner.css";

type Props = {
  selectedPage: string;
  title: string;
  subtitle: string;
  userName: string;
  onLogout: () => void;
};

const Banner: React.FC<Props> = ({ title, subtitle, userName, onLogout }) => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
      </div>

      <div className="banner-profile">
        <img
          src="/walterwhite.jpeg"
          alt="Profile"
          className="banner-profile-pic"
        />
        <div className="banner-username-wrapper">
          <span className="banner-username">{userName}</span>
          <div className="banner-logout-dropdown">
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
