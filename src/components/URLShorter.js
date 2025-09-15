

import React, { useState } from "react";

const URLShorter = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    setError("");
    setShortUrl("");
    if (!longUrl) {
      setError("Please enter a URL.");
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });
      const data = await response.json();
      if (response.ok && data.shortUrl) {
        setShortUrl(data.shortUrl);
      } else {
        setError(data.message || "Failed to shorten URL.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
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
          placeholder="https://www.example.com/some/very/long/path"
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)}
        />
        <button
          className="text-center cursor-pointer bg-blue-900 p-4 rounded-2xl m-4 text-white font-medium text-lg"
          onClick={handleShorten}
        >
          Shorten URL
        </button>
        {shortUrl && (
          <div className="mt-4 text-green-700 font-semibold">Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></div>
        )}
        {error && (
          <div className="mt-4 text-red-600 font-semibold">{error}</div>
        )}
      </div>
    </div>
  );
};

export default URLShorter;
