import * as accountConstants from "../../utils/Constants";
import "./styles.css";


const AccountSetting = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="title">{accountConstants.accountSettingsTitle}</h1>
        </div>
        <div className="user-details">
          <div className="avatar">
            <img src="/photo2.jpg" alt="" className="avatar-img" />
          </div>
          <div className="input-group">
            <h2 className="label">{accountConstants.userNameLabel}</h2>
            <input
              placeholder={accountConstants.userNamePlaceholder}
              className="input-field"
              value={'vishal kharkya'}
            />
          </div>
          <div className="input-group">
            <h2 className="label">{accountConstants.emailLabel}</h2>
            <input
              placeholder={accountConstants.emailPlaceholder}
              className="input-field"
            />
          </div>
        </div>
        <div className="subscriptions">
          <div className="subscription-header">
            <h1 className="sub-title">{accountConstants.subscriptionsTitle}</h1>
            <button className="update-button">
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
    </>
  );
};

export default AccountSetting;
