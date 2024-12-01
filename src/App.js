import React from 'react';
import textlogo from './textlogo1.png';
import banner from './dexbanner.png';
import x from './x.png';
import uni from './uni.png';
import tg from './tg.png';
import dex from './dex.png';
import dext from './dext.png';
import cgt from './cgt.png';
import tiktok from './tiktok.jpg';
import './App.css';

function App() {
  const handleCopy = () => {
    // The text you want to copy
    const textToCopy = document.getElementById('copyBox').textContent;

    // Create a temporary textarea element
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempInput);

    // Notify the user
    alert('$SKICAT CA COPIED!');
  };

  return (
    <div className="App">

      <header className="App-header">
        <div className='content'>
          <div className='copy-box'>
            <div id="copyBox" style={{ background: 'rgba(255,255,255,0.8', padding: '10px', border: '3px solid #ff9ff3', cursor: 'pointer' }}>
              0xA6f774051dFb6b54869227fDA2DF9cb46f296c09
            </div>
            <button
              onClick={handleCopy}
              style={{
                padding: '8px 15px',
                backgroundColor: '#ff9ff3',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              📋
            </button>
          </div>
          <div className='maskon'>
            <h3>the mask stays on</h3>
          </div>

          <img
            className='textlogo'
            src={textlogo}
            alt="Ski Mask Cat"
          />

          <div className='content-box'>
            <a className='buy' href='https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base' target='_blank'>BUY $SKICAT </a>
            <div className='copy-box'>
              <div id="copyBox" style={{ background: 'rgba(255,255,255,0.5', padding: '10px', border: '3px solid #ff9ff3', cursor: 'pointer' }}>
                0xA6f774051dFb6b54869227fDA2DF9cb46f296c09
              </div>
              <button
                onClick={handleCopy}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#ff9ff3',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                📋
              </button>
            </div>
          </div>

        </div>
        <div className='socials top'>
          <a href='https://x.com/skicat_CTO' target='_blank'>        <img
            className='soc'
            src={x}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.tiktok.com/@skicat' target='_blank'>        <img
            className='soc'
            src={tiktok}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://t.me/skicatportal' target='_blank'>        <img
            className='soc'
            src={tg}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base' target='_blank'>        <img
            className='soc'
            src={uni}
            alt="Ski Mask Cat"
          /></a>

          <a href='https://dexscreener.com/base/0xa6f774051dfb6b54869227fda2df9cb46f296c09' target='_blank'>        <img
            className='soc'
            src={dex}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.dextools.io/app/en/base/pair-explorer/0x8a72f8c0184b825c724f0cc3d2229cc6c36ea9d7?t=1731783960962' target='_blank'>        <img
            className='soc'
            src={dext}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.geckoterminal.com/base/pools/0x8a72f8c0184b825c724f0cc3d2229cc6c36ea9d7' target='_blank'>        <img
            className='soc'
            src={cgt}
            alt="Ski Mask Cat"
          /></a>
        </div>
        <div className='socials'>
          <a href='https://x.com/skicat_CTO' target='_blank'>        <img
            className='soc'
            src={x}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.tiktok.com/@skicat' target='_blank'>        <img
            className='soc'
            src={tiktok}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://t.me/skicatportal' target='_blank'>        <img
            className='soc'
            src={tg}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base' target='_blank'>        <img
            className='soc'
            src={uni}
            alt="Ski Mask Cat"
          /></a>

          <a href='https://dexscreener.com/base/0xa6f774051dfb6b54869227fda2df9cb46f296c09' target='_blank'>        <img
            className='soc'
            src={dex}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.dextools.io/app/en/base/pair-explorer/0x8a72f8c0184b825c724f0cc3d2229cc6c36ea9d7?t=1731783960962' target='_blank'>        <img
            className='soc'
            src={dext}
            alt="Ski Mask Cat"
          /></a>
          <a href='https://www.geckoterminal.com/base/pools/0x8a72f8c0184b825c724f0cc3d2229cc6c36ea9d7' target='_blank'>        <img
            className='soc'
            src={cgt}
            alt="Ski Mask Cat"
          /></a>
        </div>
        <p className='email'>skimaskcatbase@gmail.com</p>
      </header>
    </div>
  );
}
export default App;