import React from "react";
import textlogo from "./textlogo1.png";
import banner from "./dexbanner.png";
import x from "./x.png";
import uni from "./uni.png";
import tg from "./tg.png";
import dex from "./dex.png";
import dext from "./dext.png";
import cgt from "./cgt.png";
import tiktok from "./tiktok.jpg";

import gate from "./gate.png";
import lbank from "./lbank.png";
import xt from "./xt.png";

import howto from './howto.mp4';
import "./App.css";
import MemeMaker from "./components/MemeMaker";
import Socials from "./components/Socials";

function App() {
  const handleCopy = () => {
    // The text you want to copy
    const textToCopy = document.getElementById("copyBox").textContent;

    // Create a temporary textarea element
    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary element
    document.body.removeChild(tempInput);

    // Notify the user
    alert("$SKICAT CA COPIED!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <div className="copy-box">
            <div
              id="copyBox"
              style={{
                background: "rgba(255,255,255,0.8",
                padding: "10px",
                border: "3px solid #ff9ff3",
                cursor: "pointer",
              }}
            >
              0xA6f774051dFb6b54869227fDA2DF9cb46f296c09
            </div>
            <button
              onClick={handleCopy}
              style={{
                padding: "8px 15px",
                backgroundColor: "#ff9ff3",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              📋
            </button>
          </div>
          <div className="maskon">
            <h3>the mask stays on</h3>
          </div>

          <img className="textlogo" src={textlogo} alt="Ski Mask Cat" />

          <div className="content-box">
            <a
              className="buy"
              href="https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base"
              target="_blank"
            >
              BUY $SKICAT{" "}
            </a>
            <div className="copy-box">
              <div
                id="copyBox"
                style={{
                  background: "rgba(255,255,255,0.5",
                  padding: "10px",
                  border: "3px solid #ff9ff3",
                  cursor: "pointer",
                }}
              >
                0xA6f774051dFb6b54869227fDA2DF9cb46f296c09
              </div>
              <button
                onClick={handleCopy}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#ff9ff3",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                📋
              </button>
            </div>
          </div>
        </div>
        <div className="socials">
          <Socials />
        </div>
        <div className="socials top">
          <Socials />
        </div>
        <MemeMaker />
        <div className="buy">
          <h3>how to buy $skicat</h3>
          <div className="socials">
            <a
              href="https://www.lbank.com/nl/trade/skicat_usdt"
              target="_blank"
            >
              {" "}
              <img className="cexx" src={lbank} alt="Ski Mask Cat" />
            </a>

            <a
              href="https://www.xt.com/en/trade/skicat_usdt"
              target="_blank"
            >
              {" "}
              <img className="cexx" src={xt} alt="Ski Mask Cat" />
            </a>
            <a
              href="https://www.gate.io/pilot/base/ski-mask-cat-skicat"
              target="_blank"
            >
              {" "}
              <img className="cexx gate" src={gate} alt="Ski Mask Cat" />
            </a>
          </div>
          <video width="640" height="360" controls>
            <source src={howto} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="socials">
          <Socials />
        </div>
        <p className="email">skimaskcatbase@gmail.com</p>
      </header>
    </div>
  );
}
export default App;
