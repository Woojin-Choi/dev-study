import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AttendanceBook from "./chapter10/AttendanceBook";
import SignUp from "./chapter11/SignUp";
// import LandingPage from "./chapter9/LandingPage";
// import Accommodate from "./chapter7/Accommodate";
// import ConfirmButton from "./chapter8/ConfirmButton";
// import NotificationList from "./chapter6/NotificationList";
// import Library from "./chapter3/Library";
// import Clock from "./chapter4/Clock";
// import CommentList from "./chapter5/commentList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library /> */}
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <Accommodate /> */}
    {/* <ConfirmButton /> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
