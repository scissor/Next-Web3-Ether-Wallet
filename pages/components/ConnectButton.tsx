import { Button } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";

export const ConnectButton = ({ connector, icon, connectText }:any) => {
  const { activate } = useWeb3React();

  return (
    <Button
      leftIcon={icon}
      colorScheme="blackAlpha"
      alignSelf="center"
      width="250px"
      size="md"
      onClick={() => activate(connector)}
    >
      {connectText}
    </Button>
  );
};
