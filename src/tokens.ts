import { NetworkName } from "@masa-finance/masa-sdk";

export const Tokens: Partial<{
  [key in NetworkName]: string[];
}> = {
  bsc: [
    // meta apes
    "0x836198F984431EcdC97A7549C1Bd6B3Cd9E7a89B",
    // injective protocol
    "0x56BeA80B4aaeE77136C98F0Ac097E28Bc880c902",
  ],
  celo: [
    // double protocol
    "0xfcdeFb189c201142EbB4CD10D26a2d1f46DDDFE9",
  ],
  ethereum: [],
  basegoerli: [
    // vaissel
    "0xb1235AF9849d17149A56166A84c5c4C4365d229b",
    // innovaz
    "0xe955f2ef91eb6726dc44e6db94bcd7924e8709a8",
  ],
  polygon: [
    // tsubasa
    "0xfcdeFb189c201142EbB4CD10D26a2d1f46DDDFE9",
  ],
};
