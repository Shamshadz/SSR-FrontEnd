import Container from "./Container";
import ModifiedContainer from "./ModifiedContainer";
import "../App.css";
import React, { useState, useEffect } from 'react';
import ImageDisplay from "./ImageDisplay";
import AccuracyDisplay from "./AccuracyDisplay";


function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className=" w-full flex flex-col gap-y-10 mt-10">
      <div className="lg:w-[30%] w-[60%]">
        <h1 className=" text-3xl font-bold">
          Stats<i></i>
        </h1>
        <p className=" text-gray-400">
          SSR frequency prediction
          <br />
          For detailed stats :
        </p>
      </div>
      <div className="lg:flex lg:flex-nowrap flex-wrap gap-x-6">
        <ImageDisplay />
      </div>

      <div>
        <h1 className="text-3xl font-bold">
          Complete Analysis & Graphs<i></i>
        </h1>
        <p className=" text-gray-400">Predictions & Accuracy : </p>
      </div>

      <div className="flex items-center justify-center lg:flex lg:flex-nowrap flex-wrap">
        <AccuracyDisplay />
      </div>

      <br />

    </div>
  );
}

export default Dashboard;
