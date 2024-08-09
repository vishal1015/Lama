

// const AccountSetting = ()=>{

//     return (
//       <>
//         <div className="flex flex-col gap-4  px-8 ">
//           <div className=" flex flex-col gap-2 ">
//             <div>
//               <h1 className=" text-4xl text-bluetextcolor1 font-bold px-4 ">
//                 Account Settings
//               </h1>
//             </div>
//             <div className="flex gap-6 p-4 items-center">
//               <div className="flex-[1%]">
//                 <img
//                   src="/photo2.jpg"
//                   alt=""
//                   className="w-full h-auto rounded-full"
//                 />
//               </div>
//               <div className="flex-[30%]">
//                 <h2 className="text-lg text-black p-1 font-bold">User Name</h2>
//                 <input
//                   placeholder="Username"
//                   className="border border-black rounded-md p-2 w-full"
//                 />
//               </div>
//               <div className="flex-[30%]">
//                 <h2 className="text-lg text-black p-1 font-bold">Email</h2>
//                 <input
//                   placeholder="Email"
//                   className="border border-black rounded-md p-2 w-full"
//                 />
//               </div>
//             </div>

//             <div className=" flex flex-col gap-4 ">
//               <div className=" flex flex-row  justify-between items-center">
//                 <h1 className=" text-4xl text-bluetextcolor1 font-bold p-2 ">
//                   Subscriptions
//                 </h1>
//                 <button className=" text-white bg-purple-900  rounded-lg font-bold  h-10 px-6 shadow-md ">
//                   Update
//                 </button>
//               </div>

//               <div
//                 style={{
//                   background:
//                     "linear-gradient(90deg, rgba(126,34,206,1) 0%, rgba(77,4,141,1) 58%)",
//                 }}
//                 className="flex  justify-between items-center rounded-lg py-4 px-8"
//               >
//                 <h1 className="text-white text-xl">
//                   You are currently on the{" "}
//                   <span className=" underline font-bold">
//                     Ques AI Basic Plan!
//                   </span>
//                 </h1>
//                 <button className=" bg-white text-purple-700 p-2 px-6 rounded-lg font-bold  shadow-sm">
//                   Upgrade
//                 </button>
//               </div>
//               <h3 className=" text-red-500 underline font-bold text-lg cursor-pointer">
//                 Cancel Subscription
//               </h3>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export default AccountSetting;


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
