import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import { Masa, SupportedNetworks } from "@masa-finance/masa-sdk";

import "@masa-finance/masa-react/dist/css/styles.css";
import { Tokens } from "./tokens";
import { constants, providers, VoidSigner } from "ethers";

interface TokenInfo {
  tokenAddress: string;
  networkName: string;
  totalSupply: number;
  name: string;
  symbol: string;
  explorerUrl: string;
}

const App = () => {
  const [tokens, setTokens] = useState<TokenInfo[]>([]);

  const loadTokens = useCallback(async () => {
    const tempTokens: TokenInfo[] = [];

    for (const tokensIndex in Tokens) {
      const tokensAddresses = Tokens[tokensIndex];
      const network = SupportedNetworks[tokensIndex];

      const masa = await Masa.create({
        signer: new VoidSigner(
          constants.AddressZero,
          new providers.JsonRpcProvider(network.rpcUrls[0]),
        ),
      });

      for (const tokenAddress of tokensAddresses) {
        const { contract } = await masa.sbt.connect(tokenAddress);

        const [totalSupply, name, symbol] = await Promise.all([
          contract.totalSupply(),
          contract.name(),
          contract.symbol(),
        ]);

        tempTokens.push({
          tokenAddress,
          networkName: tokensIndex,
          totalSupply: totalSupply.toNumber(),
          name,
          symbol,
          explorerUrl: `${network.blockExplorerUrls[0]}/token/${tokenAddress}`,
        });
        await setTokens(tempTokens);
      }
    }
  }, [setTokens]);

  useEffect(() => {
    void loadTokens();

    // reload every 5 minutes
    setInterval(() => loadTokens(), 5 * 60 * 1000);
  }, [loadTokens]);

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
      <div className={"App-link"}>
        <div>
          {tokens.length > 0
            ? `Ethereum: ${tokens
                .filter((t) => t.networkName === "ethereum")
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>
        <div>
          {tokens.length > 0
            ? `Polygon: ${tokens
                .filter((t) => t.networkName === "polygon")
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>
        <div>
          {tokens.length > 0
            ? `Celo: ${tokens
                .filter((t) => t.networkName === "celo")
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>

        <div>
          {tokens.length > 0
            ? `Base: ${tokens
                .filter((t) => t.networkName === "basegoerli")
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>
        <div>
          {tokens.length > 0
            ? `BSC: ${tokens
                .filter((t) => t.networkName === "bsc")
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>
        <div>
          {tokens.length > 0
            ? `Total: ${tokens
                .map((t) => t.totalSupply)
                .reduce((a, b) => a + b, 0)
                .toLocaleString()} SBT`
            : undefined}
        </div>
      </div>
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
                  {token.name} ({token.symbol}):{" "}
                  {token.totalSupply.toLocaleString()}
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
