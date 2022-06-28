import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "@mui/material/Button";

function App() {
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "Build/Build_WebGL.loader.js",
    dataUrl: "Build/Build_WebGL.data",
    frameworkUrl: "Build/Build_WebGL.framework.js",
    codeUrl: "Build/Build_WebGL.wasm",
  });

  function TestA() {
    sendMessage("GameManager", "BtnClick");
  }

  return (
    <div>
      <Button variant="contained" onClick={TestA}>
        Contained
      </Button>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
      />
    </div>
  );
}

export default App;
