
const URLShorter = () => {
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
        />
        <button 
 className="text-center cursor-pointer bg-blue-900 p-4 rounded-2xl m-4 text-white font-medium text-lg">
          Shorten URL
        </button>
      </div>

   
    </div>
  );
};

export default URLShorter;
