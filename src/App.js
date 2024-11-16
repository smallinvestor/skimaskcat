import React from 'react';
import logo from './logo.png';
import banner from './dexbanner.png';
import x from './x.png';
import uni from './uni.png';
import tg from './tg.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ski Mask Cat</h1>
        <img
          className='logo'
          src={logo}
          alt="Ski Mask Cat"
        />
        <p>CA: 0xA6f774051dFb6b54869227fDA2DF9cb46f296c09</p>
        <a href='https://x.com/skicat_CTO' target='_blank'>        <img
          className='soc'
          src={x}
          alt="Ski Mask Cat"
        /></a>
        <a href='https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base' target='_blank'>        <img
          className='soc'
          src={uni}
          alt="Ski Mask Catt"
        /></a>
        <a href='https://t.me/skicatportal' target='_blank'>        <img
          className='soc'
          src={tg}
          alt="Ski Mask Cat"
        /></a>

        <img
          className='banner'
          src={banner}
          alt="Ski Mask Cat"
        />
      </header>
    </div>
  );
}
export default App;