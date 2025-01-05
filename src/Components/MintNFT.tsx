import { useState } from "react";
import { ethers } from "ethers";
import { useWallet } from "@/Hook/useWallet";
import { useContract } from "@/Hook/useContract";

interface MintNFTProps {
    setMint: (value: boolean) => void;
}

const MintNFT = ({ setMint }: MintNFTProps) => {
    const { connectWallet } = useWallet();
    const [tokenURI, setTokenURI] = useState("");
    const [price, setPrice] = useState("");

    const mintNFTFunction = async () => {
        console.log("Minting NFT...");
        const wallet = await connectWallet();
        console.log(wallet);
        if (!wallet) {
            alert("Wallet connection failed!");
            return;
        }
        const { signer } = wallet;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const contract = await useContract(signer);
        console.log(contract)
        
        const listingFee = ethers.parseEther("0.01"); // 0.01 AVAX
        console.log("Listing Fee:", listingFee);

        try {
            console.log("try block mintNFTFunction");
            const tx = await contract.mintNFT(tokenURI, ethers.parseEther(price), {
                value: listingFee,
            });
            await tx.wait();
            setMint(true);
            console.log("NFT Minted Successfully!");
        } catch (error) {
            console.error("Minting failed:", error);
            console.log("Minting failed! Check console for details.");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Token URI" onChange={(e) => setTokenURI(e.target.value)} />
            <input type="text" placeholder="Price (AVAX)" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={mintNFTFunction}>Mint NFT (0.01 AVAX Fee)</button>
        </div>
    );
};

export default MintNFT;
