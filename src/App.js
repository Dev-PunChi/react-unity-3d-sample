import React, { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "@mui/material/Button";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function App() {
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  const {
    unityProvider,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
  } = useUnityContext({
    loaderUrl: "Build/Build_WebGL.loader.js",
    dataUrl: "Build/Build_WebGL.data",
    frameworkUrl: "Build/Build_WebGL.framework.js",
    codeUrl: "Build/Build_WebGL.wasm",
  });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  const handleGameOver = useCallback((userName, score) => {
    setUserName(userName);
    setScore(score);
  }, []);

  useEffect(() => {
    addEventListener("CallReact", handleGameOver);
    return () => {
      removeEventListener("CallReact", handleGameOver);
    };
  }, [addEventListener, removeEventListener, handleGameOver]);

  function TestA() {
    sendMessage("GameManager", "BtnClick");
  }

  return (
    <div>
      <PrimarySearchAppBar />
      <Unity
        unityProvider={unityProvider}
        style={{
          height: "90%",
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
      {/* {<h1>{`불럿다 저는 ${userName} 이고 점수는 ${score} 입니다.`}</h1>} */}
    </div>
  );
}

export default App;
