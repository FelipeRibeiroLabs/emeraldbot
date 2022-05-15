import React from "react";
import { Routes, Route } from "react-router-dom";
import Home2d from "./pages/Home2d";
import DisplayCommands from "./pages/DisplayCommands";
import GeneralCommands from "./pages/GeneralCommands";
import AccessCommands from "./pages/AccessCommands";


import { useImage } from "./hooks/useImage";
import Overlay from "./components/Overlay";
import BackgroundComponent from "./components/BackgroundComponent";
import LoadingIndicator from "./components/LoadingIndicator";

const url =
  "https://res.cloudinary.com/do4mactw0/image/upload/v1652537880/emerald-bot_c8qn1d.png";

export default function App() {
  const { hasLoaded, hasError } = useImage(url);
  console.log("hasLoaded", hasLoaded);

  if (hasError) {
    return null;
  }

  return (
    <>
      {!hasLoaded && <LoadingIndicator />}
      {hasLoaded && (
        <>
          <BackgroundComponent />
          <Overlay />
          <Routes>
            <Route path="/" element={<Home2d url={url} />} />
            <Route path="/display" element={<DisplayCommands />} />
            <Route path="/access" element={<AccessCommands />} />
            <Route path="/general" element={<GeneralCommands />} />
          </Routes>
        </>
      )}
    </>
  );
}
