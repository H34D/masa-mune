import { NetworkName } from "@masa-finance/masa-sdk";

export const Tokens: Partial<{
  [key in NetworkName]: string[];
}> = {
  bsc: [
    // top goal
    "0xF44460DfA507702CF34689FF7ef647f178a4c636",
    // meta apes
    "0x836198F984431EcdC97A7549C1Bd6B3Cd9E7a89B",
    // injective protocol
    "0x56BeA80B4aaeE77136C98F0Ac097E28Bc880c902",
  ],
  celo: [
    // good dollar
    "0x3F1EFED96Eb7f98F0618136133D795F5997ECEf4",
    // double protocol
    "0xfcdeFb189c201142EbB4CD10D26a2d1f46DDDFE9",
  ],
  ethereum: [],
  basegoerli: [
    // dackies
    "0x7CB1BAD68E1B642F4cf9FdbB165cb534E5B1DAF9",
    // vaissel
    "0xb1235AF9849d17149A56166A84c5c4C4365d229b",
    // innovaz
    "0xe955f2ef91eb6726dc44e6db94bcd7924e8709a8",
  ],
  polygon: [
    // masa ambassador 1 + 2
    "0x3F1EFED96Eb7f98F0618136133D795F5997ECEf4",
    "0x376f5039Df4e9E9c864185d8FaBad4f04A7E394A",
    // solid world
    "0xbf060cdfc820cbdafa6313fdb0807944b99a03b7",
    // tsubasa
    "0xfcdeFb189c201142EbB4CD10D26a2d1f46DDDFE9",
  ],
};
