import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

function App() {
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/Build_WebGL.loader.js",
      dataUrl: "Build/Build_WebGL.data",
      frameworkUrl: "Build/Build_WebGL.framework.js",
      codeUrl: "Build/Build_WebGL.wasm",
    });

  function gameManagerBtnClick() {
    sendMessage("GameManager", "BtnClick");
  }

  return (
    <div>
      <PrimarySearchAppBar
        gameManagerBtnClick={gameManagerBtnClick}
        addEventListener={addEventListener}
        removeEventListener={removeEventListener}
      />
      <Unity
        unityProvider={unityProvider}
        style={{
          height: "90%",
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
    </div>
  );
}

export default App;
