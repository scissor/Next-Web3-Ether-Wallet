import { Image } from "@chakra-ui/react";

function LoadImage(url:any) {
  return <Image boxSize="30px" borderRadius="full" src={url} />;
}

const MetaMask = LoadImage(
  "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
);

const WalletConnect = LoadImage(
  "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png"
);

const WalletLink = LoadImage(
  "https://pbs.twimg.com/profile_images/1483958908611743746/FAk-Oc4W_400x400.png"
);

export const Icons = {
  MetaMask,
  WalletConnect,
  WalletLink
};
