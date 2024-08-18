import { useState } from "react";
import * as accountConstants from "../../utils/Constants";
import "./styles.css";
import axios from "axios";
import Sidebar from "../../sideBar/SideBar";
import ScreenHeader from "../../components/LayoutScreenHeader/ScreenHeader";
import { dbUri } from "../../utils/Constants";

const AccountSetting = () => {

  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const [username, setUsername] = useState("");
  const name = localStorage.getItem("username");

  const updateUserinfo = async () => {
    const getNewName = async () => {
      console.log(userId, username, email, password);
      try {
        const response = await axios.put(`${dbUri}/api//users/${userId}`, {
          username,
          email,
          password,
        });
        console.log(response);
        const newusername = response.data.username;
        localStorage.setItem("username", newusername);
        alert("username changed successfully");
      } catch (error) {
        console.log("user could not updated :" + error);
      }
    };

    const updatedeUserName = await getNewName();
    setUsername(updatedeUserName);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[23%] h-full">
          <Sidebar />
        </div>
        <div className=" w-full h-full flex flex-col ">
          <ScreenHeader />
          <main className="flex-1 overflow-auto">
            <div className="container">
              <div className="header">
                <h1 className="title">
                  {accountConstants.accountSettingsTitle}
                </h1>
              </div>
              <div className="user-details">
                <div className="avatar">
                  <img src="/photo2.jpg" alt="" className="avatar-img" />
                </div>
                <div className="input-group">
                  <h2 className="label">{accountConstants.userNameLabel}</h2>
                  <input
                    placeholder={name}
                    className="input-field"
                    value={username}
                    onChange={(e) => {
                      console.log(username);
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <h2 className="label">{accountConstants.emailLabel}</h2>
                  <input
                    placeholder={accountConstants.emailPlaceholder}
                    className="input-field cursor-no-drop"
                    value={email}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="subscriptions">
                <div className="subscription-header">
                  <h1 className="sub-title">
                    {accountConstants.subscriptionsTitle}
                  </h1>
                  <button className="update-button" onClick={updateUserinfo}>
                    {accountConstants.updateButton}
                  </button>
                </div>
                <div className="subscription-plan">
                  <h1 className="plan-text">
                    {accountConstants.currentPlanText}{" "}
                    <span className="plan-highlight">
                      {accountConstants.planName}
                    </span>
                  </h1>
                  <button className="upgrade-button">
                    {accountConstants.upgradeButton}
                  </button>
                </div>
                <h3 className="cancel-text">
                  {accountConstants.cancelSubscriptionText}
                </h3>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
