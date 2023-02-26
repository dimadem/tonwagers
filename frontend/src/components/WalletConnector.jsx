import { useTonAddress } from '@tonconnect/ui-react';
export const Wallet = () => {
    const wallet = useTonWallet();

    return (
        wallet && (
            <div>
                <span>Connected wallet: {wallet.name}</span>
                <span>Device: {wallet.device.appName}</span>
            </div>
        )
    );
};