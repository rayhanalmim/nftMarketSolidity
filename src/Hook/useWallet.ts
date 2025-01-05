import { BrowserProvider } from "ethers";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ethereum?: any;
    }
}

export const useWallet = () => {
    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("Please install Metamask!");
            return;
        }

        const provider = new BrowserProvider(window.ethereum); // Correct import for ethers v6
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        return { provider, signer, address };
    };

    return { connectWallet };
};
