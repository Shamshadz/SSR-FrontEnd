import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ModifiedContainer({ subheading, heading, data, percentage, content }) {
  return (
    <div className=" lg:mt-0 mt-5 w-full min-h-[180px] flex justify-between itms-start  border-gray-200 border-[1px] border-opacity-40 ">
      <div className="flex flex-col w-full">
        <div className=" py-2 font-semibold px-3 border-b-[1px] border-opacity-40 border-gray-200">
          {heading}
          <p className=" text-sm text-gray-500">{subheading}</p>
        </div>
        <div className=" py-2 px-3">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="w-full data-container flex  justify-between ">
              <div className="data-key text-gray-400">{key}</div>
              <div className="data-value text-gray-400">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" px-5 h-full py-14 w-[180px]">
      <CircularProgressbar
        value={percentage}
        
      text={content}
        styles={buildStyles({
          textSize: `10`,
          textColor: 'white', // Text color
          pathColor: `blue`, // Progress bar color
          trailColor: 'skyblue', // Background color
        })}
      />
      </div>
    </div>
  );
}

export default ModifiedContainer;
