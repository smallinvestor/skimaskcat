import React from "react";
import x from "../x.png";
import uni from "../uni.png";
import tg from "../tg.png";
import dex from "../dex.png";
import dext from "../dext.png";
import cgt from "../cgt.png";
import tiktok from "../tiktok.jpg";
import cmc from "../cmc.png";
const Socials = () => {
    return (
        <div>
            <a href="https://x.com/skicat_CTO" target="_blank">
                {" "}
                <img className="soc" src={x} alt="Ski Mask Cat" />
            </a>
            <a href="https://www.tiktok.com/@skicat" target="_blank">
                {" "}
                <img className="soc" src={tiktok} alt="Ski Mask Cat" />
            </a>
            <a href="https://t.me/skicatportal" target="_blank">
                {" "}
                <img className="soc" src={tg} alt="Ski Mask Cat" />
            </a>
            <a
                href="https://app.uniswap.org/swap?outputCurrency=0xA6f774051dFb6b54869227fDA2DF9cb46f296c09&chain=base"
                target="_blank"
            >
                {" "}
                <img className="soc" src={uni} alt="Ski Mask Cat" />
            </a>

            <a
                href="https://dexscreener.com/base/0xa6f774051dfb6b54869227fda2df9cb46f296c09"
                target="_blank"
            >
                {" "}
                <img className="soc" src={dex} alt="Ski Mask Cat" />
            </a>
            <a
                href="https://www.dextools.io/app/en/base/pair-explorer/0x8a72f8c0184b825c724f0cc3d2229cc6c36ea9d7?t=1731783960962"
                target="_blank"
            >
                {" "}
                <img className="soc" src={dext} alt="Ski Mask Cat" />
            </a>
            <a
                href="https://www.coingecko.com/en/coins/ski-mask-cat"
                target="_blank"
            >
                {" "}
                <img className="soc" src={cgt} alt="Ski Mask Cat" />
            </a>
            <a
                href="https://coinmarketcap.com/currencies/ski-mask-cat/"
                target="_blank"
            >
                {" "}
                <img className="soc" src={cmc} alt="Ski Mask Cat" />
            </a>
        </div>
    );
};

export default Socials;