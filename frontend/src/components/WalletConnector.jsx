import { useTonWallet } from "@tonconnect/ui-react";

export default function WalletConnector() {
  const wallet = useTonWallet();

  return (
    wallet && (
      <div>
        <span>Connected wallet: {wallet.name}</span>
        <span>Device: {wallet.device.appName}</span>
      </div>
    )
  );
}
