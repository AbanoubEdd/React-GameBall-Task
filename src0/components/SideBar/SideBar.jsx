import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="tabs-menu aside-menu w-tab-menu">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "main-tab w-inline-block w-tab-link w--current"
            : "main-tab w-inline-block w-tab-link"
        }
      >
        <div className="tab-icon">
          <img
            src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a1fce9829ca4446352d999_icon_Dashboard_HiFi-M_InActive.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="tab-name main">Dashboard</div>
      </NavLink>
      <NavLink
        to="/gameplane"
        className={({ isActive }) =>
          isActive
            ? "main-tab w-inline-block w-tab-link w--current"
            : "main-tab w-inline-block w-tab-link"
        }
      >
        <div className="tab-icon">
          <img
            src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a1fd64dd2340bb343a2213_icon_GamePlan_HiFi-M_Active.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="tab-name">Game Plan</div>
      </NavLink>
      <NavLink
        to="/levels"
        className={({ isActive }) =>
          isActive
            ? "main-tab w-inline-block w-tab-link w--current"
            : "main-tab w-inline-block w-tab-link"
        }
      >
        <div className="tab-icon">
          <img
            src="https://uploads-ssl.webflow.com/63a1f0d386f2d45519d77fda/63a1fd77db6474b0c7597928_icon_Levels_HiFi-M_InActive.png"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="tab-name main">Levels</div>
      </NavLink>
    </div>
  );
}

export default SideBar;
