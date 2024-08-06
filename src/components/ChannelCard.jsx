/* eslint-disable react/prop-types */
 import ChannelPhoto from "../../public/photo2.jpg"

 function ChannelCard() {
 
  return (
    <>
      <div className="bg-white shadow-md flex flex-row gap-2 relative rounded-2xl border border-gray-300 my-2 mx-6">
        <div className=" p-4 flex items-center justify-center">
          <img
            src={ChannelPhoto}
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col  justify-center gap-2 ">
          <h2>Upload</h2>
          <h2>Youtube Video</h2>
        </div>
      </div>
    </>
  );
}

export default ChannelCard;
