import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

const Walletconnect = new WalletConnectConnector({
  rpc: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

const Walletlink = new WalletLinkConnector({
  url: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  appName: "Ether Wallet Demo"
});

export const Connectors = {
  Injected,
  Walletlink,
  Walletconnect
};