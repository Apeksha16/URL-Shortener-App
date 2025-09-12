
import React from "react";
import ReactDOM from "react-dom/client";
import URLShorter from "./src/components/URLShorter";

const App = () => {
return(
<URLShorter/>
)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
