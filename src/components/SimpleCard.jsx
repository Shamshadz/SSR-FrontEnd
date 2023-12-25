import React from "react";

function SimpleCard({ img, heading, para }) {
  return (
    <div className="lg:py-0 py-6">
      <div className="flex gap-x-2  items-center mb-2">
        <img src={img} className="w-[30px]" alt="" />
        <h2 className=" text-md font-bold">{heading}</h2>
      </div>
      <p>{para}</p>
    </div>
  );
}

export default SimpleCard;
