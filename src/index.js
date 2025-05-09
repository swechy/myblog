import React from "react";
import "./assets/css/global.css";
import "./assets/css/globalm.css";
import "./assets/css/iconfont.css";
import "./assets/css/style.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/css/prism.css";
import "./assets/css/ants.css";
import "./assets/prism/prism.css";
import "./assets/prism/prism.js";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

// 获取根DOM元素
const rootElement = document.getElementById("root");
// 设置类名
rootElement.className = "darktheme";
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
