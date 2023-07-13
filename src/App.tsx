import React, { useEffect, useState } from "react";
import "./App.scss";
import { Masa, SupportedNetworks } from "@masa-finance/masa-sdk";

import "@masa-finance/masa-react/dist/css/styles.css";
import { Tokens } from "./tokens";
import { constants, providers, VoidSigner } from "ethers";

interface TokenInfo {
  tokenAddress: string;
  networkName: string;
  totalSupply: string;
  name: string;
  explorerUrl: string;
}

const App = () => {
  const [tokens, setTokens] = useState<TokenInfo[]>([]);

  useEffect(() => {
    const loadTokens = async () => {
      const tempTokens: TokenInfo[] = [];

      for (const tokensIndex in Tokens) {
        const tokensAddresses = Tokens[tokensIndex];
        const network = SupportedNetworks[tokensIndex];

        const masa = await Masa.create({
          signer: new VoidSigner(
            constants.AddressZero,
            new providers.JsonRpcProvider(network.rpcUrls[0])
          ),
        });

        for (const tokenAddress of tokensAddresses) {
          const { contract } = await masa.sbt.connect(tokenAddress);

          const [totalSupply, name] = await Promise.all([
            contract.totalSupply(),
            contract.name(),
          ]);

          tempTokens.push({
            tokenAddress,
            networkName: tokensIndex,
            totalSupply: totalSupply.toString(),
            name,
            explorerUrl: `${network.blockExplorerUrls[0]}/token/${tokenAddress}`,
          });
        }
      }

      await setTokens(tempTokens);
    };

    void loadTokens();
  }, [setTokens]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          alt={"Masa Mune"}
          width={120}
          src={
            "https://static.wikia.nocookie.net/finalfantasy/images/d/df/Dissidia012-Gilgamesh_Masamune.png"
          }
        />
      </header>
      <div>
        {tokens.map((token, index) => {
          return (
            <div
              key={`${token.networkName}-${token.tokenAddress}-${index}`}
              style={{
                fontSize: "32px",
                display: "inline-block",
                padding: "1em",
              }}
            >
              <a
                href={token.explorerUrl}
                target={"_blank"}
                rel="noreferrer"
                className={"App-link"}
              >
                <div>{token.networkName}</div>
                <div>
                  {token.name}: {token.totalSupply}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
