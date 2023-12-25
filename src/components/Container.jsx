import React from "react";

function Container({ heading, data }) {
  return (
    <div className=" lg:my-0 my-4 w-full min-h-[180px] flex flex-col border-gray-200 border-[1px] border-opacity-40 ">
      <div className=" py-2 font-semibold px-3 border-b-[1px] border-opacity-40 border-gray-200">{heading}</div>
      <div className=" py-2 px-3">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className=" data-container flex justify-between  ">
            <div className="data-key text-gray-400">{key}</div>
            <div className="data-value text-gray-400">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
