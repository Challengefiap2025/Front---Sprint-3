import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // seu CSS global

// Aqui está o "root" da aplicação.
// Tudo que for renderizado no <App /> vai ser injetado dentro do <div id="root"> no index.html
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* 
      StrictMode ajuda a detectar problemas, 
      mas não altera o funcionamento da aplicação. 
    */}
    <App />
  </React.StrictMode>
);
