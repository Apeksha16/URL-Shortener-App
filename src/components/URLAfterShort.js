const URLAfterShort = () => {
  return (
      <div className="bg-white rounded-4xl flex flex-col m-6 p-7">
        <p className="font-bold text-3xl">Your Shortened URLs</p>
<div className="border-2 border-gray-300 rounded-lg p-4 mt-6">
<p>Original URL:</p>
<p>https://www.google.com</p>
<p className="mt-4">Short URL:</p>
<p className="mb-4">https://www.g.com</p>
    <div className="flex gap-3 mt-4">
      {/* Copy Button */}
      <button
        className="cursor-pointer flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 font-medium px-4 py-2 rounded-xl shadow-sm transition"
      >
        📋 Copy
      </button>

      {/* Visit Button */}
      <button
        className=" cursor-pointer flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium px-4 py-2 rounded-xl shadow-sm transition"
      >
        🔗 Visit
      </button>

      {/* Delete Button */}
      <button
        className=" cursor-pointer flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium px-4 py-2 rounded-xl shadow-sm transition"
      >
        🗑️ Delete
      </button>
    </div>

</div>
      </div>

      

  );
};

export default URLAfterShort;
