import  { useState } from "react";
import "./styles.css"; // Import the CSS file for styling
import ColorPicker from "./ColorPicker";
import photo from "../../../public/photo2.jpg"
import { FiUpload } from "react-icons/fi";
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("General");

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return <GeneralContent />;
      case "Display":
        return <DisplayContent />;
      case "Advance":
        return <AdvanceContent />;
      default:
        return null;
    }
  };

  return (
    <div className=" px-8 h-screen mb-96 ">
      <div className="">
        <h1 className=" text-4xl text-bluetextcolor1 font-bold px-6 ">
          Configuration
        </h1>
      </div>
      <div>
        <div className="tabs-container">
          {["General", "Display", "Advance"].map((tab) => (
            <div
              key={tab}
              className={`tab-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="line-container">
          <div className={`line ${activeTab.toLowerCase()}`} />
        </div>
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
};

const GeneralContent = () =>{
    return (
      <div className=" px-6  flex gap-4 flex-col">
        <div>
          <h2 className=" text-xl font-bold mb-4 ">Chatbot Name</h2>
          <div>
            <input className="w-full h-10  border border-gray-300 rounded-lg" />
            <h3>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h3>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold mb-4 ">Welcome Message</h2>
          <div>
            <input className="w-full h-10  border border-gray-300 rounded-lg" />
            <h3>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h3>
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold mb-4 ">Input Placeholder</h2>
          <div>
            <input className="w-full h-10  border border-gray-300 rounded-lg" />
            <h3>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h3>
          </div>
        </div>
      </div>
    );
} 
const DisplayContent = () => {
 return (
   <div className="flex flex-col gap-4 px-8 ">
     <div className=" flex  flex-col gap-4 mb-4">
       <div className="grid grid-rows-2 grid-cols-2 gap-2 ">
         <div className=" flex flex-col gap-1">
           <h1 className=" mb-2 font-bold text-lg">Primary color</h1>
           <ColorPicker />
           <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
         </div>
         <div className=" flex flex-col gap-2">
           <h1 className=" mb-2 font-bold text-lg">Font color</h1>
           <ColorPicker />
           <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
         </div>
         <div className=" flex flex-col gap-2">
           <h1 className=" mb-2 font-bold text-lg">Font Size (in px)</h1>
           <input className=" border border-gray-500 w-[80%] h-8  rounded-md" />
           <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
         </div>
         <div className=" flex flex-col gap-2">
           <h1 className=" mb-2 font-bold text-lg">
             Chat Height (in % of total screen)
           </h1>
           <input className=" border border-gray-500 w-[80%] h-8 rounded-md "></input>
           <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
         </div>
       </div>
       <div className="flex flex-row justify-between items-center ">
         <div className="flex flex-col gap-1">
           <h1 className="mt-2 font-bold text-lg">Show Sources</h1>
           <p>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
         </div>
         <div>
           <input className="switch" type="checkbox" checked="true"></input>
         </div>
       </div>
     </div>
     <div className="horizental-line"></div>
     <div>
       <h1 className=" text-bluetextcolor1 font-bold text-lg"> Chat Icon</h1>
       <div className="grid grid-rows-2 grid-cols-2 gap-2 ">
         <div>
           <h1 className="font-bold text-lg py-2">Chat Icon Size</h1>
           <input className="border border-gray-400 rounded-md h-8 w-[80%]"></input>
         </div>
         <div>
           <h1 className="font-bold text-lg py-2">Position on Screen</h1>
           <input className="border border-gray-400 rounded-md h-8 w-[80%]"></input>
         </div>
         <div>
           <h1 className="font-bold text-lg py-2">
             Distance from Bottom (in px)
           </h1>
           <input className="border border-gray-400 rounded-md h-8 w-[80%]"></input>
         </div>
         <div>
           <h1 className="font-bold text-lg py-2">
             Horizontal Distance (in px)
           </h1>
           <input className="border border-gray-400 rounded-md h-8 w-[80%]"></input>
         </div>
       </div>
     </div>
     <div className=" flex flex-col gap-4 ">
       <h1 className="font-bold text-lg ">Bot Icon</h1>
       <div className=" flex gap-8  items-center">
         <img src={photo} alt="" className=" w-20 h-20 rounded-full " />
         <button className=" bg-bluetextcolor1 px-6 py-1 rounded-lg flex gap-2 items-center justify-center text-white font-semibold w-[13%] h-10 ">
           Upload <FiUpload />
         </button>
       </div>
     </div>
   </div>
 );
}
const AdvanceContent =  () => {
  
    return <div>Advance Content</div>;
}
export default TabNavigation;


  