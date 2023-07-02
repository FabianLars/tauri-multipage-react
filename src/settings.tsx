import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h1>Hello from settings.tsx</h1>
      <h2>
        Click here to go to back to the index page: <a href="/">Index</a>
      </h2>
    </div>
  </React.StrictMode>
);
