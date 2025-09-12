import React, { use, useState } from "react";
import ReactDOM from "react-dom/client";
import URLShorter from "./src/components/URLShorter";
import URLAfterShort from "./src/components/URLAfterShort";
import URLInfo from "./src/components/URLInfo";

const App = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateCounter = () => {
    if (show === false) {
      setShow(true);
      console.log(show);
    } else {
      setShow(false);
      console.log(show);
    }
  };

  

  const handleButtonClick = () => {
    setSubmittedValue(inputValue);
    updateCounter();
  };

  return (
    //URLShorter
    <div>
      <div className="bg-[#ebf2fe]">
        <div>
          <h1 className="text-4xl font-bold text-center p-6">URL Shortner</h1>
          <h3 className="text-center p-2 text-2xl text-gray-700">
            Transform long URLs into short, shareable links
          </h3>
        </div>
        <div className="bg-white rounded-4xl flex flex-col m-6 p-7">
          <p className="font-semibold">Enter your long URL</p>
          <input
            className="p-4  m-4 border-2 border-gray-300 rounded-2xl"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="https://www.example.com/some/very/long/path"
          />
          <button
            onClick={() => handleButtonClick()}
            className="text-center cursor-pointer bg-blue-900 p-4 rounded-2xl m-4 text-white font-medium text-lg"
          >
            Shorten URL
          </button>
        </div>
      </div>

      {/* //URLAfterShort */}
      {show == true && (
        <div className="bg-white rounded-4xl flex flex-col m-6 p-7">
          <p className="font-bold text-3xl">Your Shortened URLs</p>
          <div className="border-2 border-gray-300 rounded-lg p-4 mt-6">
            <p>Original URL:</p>
            <p>{submittedValue}</p>
            <p className="mt-4">Short URL:</p>
            <p className="mb-4">https://www.g.com</p>
            <div className="flex gap-3 mt-4">
              {/* Copy Button */}
              <button className="cursor-pointer flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-medium px-4 py-2 rounded-xl shadow-sm transition">
                📋 Copy
              </button>

              {/* Visit Button */}
              <button className=" cursor-pointer flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-4 py-2 rounded-xl shadow-sm transition">
                🔗 Visit
              </button>

              {/* Delete Button */}
              <button className=" cursor-pointer flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium px-4 py-2 rounded-xl shadow-sm transition">
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* //URLInfo */}
      <div className="bg-[#eef7ff] border-2 border-solid border-blue-200 m-4 p-4 rounded-2xl">
        <h2 className="text-[#1d40b0] font-semibold text-2xl ">
          How it works:
        </h2>
        <ul className="text-[#2757da] m-4">
          <li>• Enter any long URL in the form above</li>
          <li>• Get a shortened version that you can share</li>
          <li>
            • When someone visits the short URL, they'll be redirected to the
            original
          </li>
          <li>• All your shortened URLs are saved locally in your browser</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
