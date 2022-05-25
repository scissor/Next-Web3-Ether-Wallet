import type { NextPage } from 'next'
import {
  Flex,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Divider
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { ConnectButton } from "./components/ConnectButton";
import { Icons } from "./components/Icons";
import { Connectors } from "./connectors";

const Home: NextPage = () => {
  const { account, active, deactivate } = useWeb3React();
  // const isConnected = typeof account === "string" && !!library;

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(blue.700 25%, purple.900 75%)"
    >
      <Box
        bg="#345678"
        borderWidth="10px"
        borderRadius="10px"
        borderColor="black"
        borderInline="violet"
        padding="15px"
        bgGradient="linear(green.500 0%, blue.200 25%, purple.300 50%)"
        w="md"
        p={5}
      >
        <Heading as="h1" size="lg" textAlign="center" color="purple.900">
          Web3-React Ether Wallet
        </Heading>
        <Divider my={4} borderColor="purple.500" borderWidth="1px" />
        <Stack spacing={1} py={1} px={10}>
          {!active ? (
            <>
              <ConnectButton
                connector={Connectors.Injected}
                icon={Icons.MetaMask}
                connectText="MetaMask"
              />
              <ConnectButton
                connector={Connectors.Walletconnect}
                icon={Icons.WalletConnect}
                connectText="Wallet Connect"
              />
              <ConnectButton
                connector={Connectors.Walletlink}
                icon={Icons.WalletLink}
                connectText="Coinbase Wallet"
              />
            </>
          ) : (
            <Button colorScheme="blue" size="lg" onClick={() => deactivate()}>
              Disconnect
            </Button>
          )}
          <Text color="purple.700" align="center" as="b">
            {active ? `${account?.substring(0, 15)}...` : "Not connected"}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Home