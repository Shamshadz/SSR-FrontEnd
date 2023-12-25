import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from 'papaparse';


function Home() {
  const navigate = useNavigate();
  const [csvData, setCSVData] = useState(null);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Papa.parse(e.target.result, {
          complete: (result) => {
            console.log(result);
            setCSVData(result);
          },
          header: true,
        });
      };
      reader.readAsText(file);
    }
  };

  const handleFile1Change = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleFile2Change = (event) => {
    setFile2(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    fetch('http://127.0.0.1:5000/upload_csv', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="mt-8 min-h-[100vh] h-full flex flex-col bg-slate-950 ">
      <div className="lg:w-[60%] gap-y-2 w-[80%] min-h-[130px]  flex flex-col justify-around items-start">
        <h1 className=" text-4xl font-bold leading-[40px]">
          SSR PREDICTOR USING ML
        </h1>
        <p>
          Predicting the Sub Synchronous Resonance in Electrical Power Systems
          by using the Machine learning approach.
        </p>
      </div>
      <div></div>
      <div className=" border-gray-100  border-2 mt-20 mb-20"></div>
      <form action="">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="inp" className=" text-2xl font-semibold">
            Upload the Un-Labelled-CSV file :{" "}
          </label>
          <input
            id="inp"
            type="file"
            className=" "
            required
            accept=".csv"
            onChange={handleFile1Change}
          />
        </div>
        <br />
        <div className="flex flex-col gap-y-4">
          <label htmlFor="inp" className=" text-2xl font-semibold">
            Upload the Labelled-CSV file :{" "}
          </label>
          <input
            id="inp"
            type="file"
            className=" "
            required
            accept=".csv"
            onChange={handleFile2Change}
          />
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/dashboard");
              handleUpload();
            }}
            className="btn my-10 w-[50%]"
          >
            Predict
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
