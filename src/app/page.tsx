"use client"
import MintNFT from "@/Components/MintNFT";
import TotalListedNFTs from "@/Components/TotalListedNFTs";
import { useWallet } from "@/Hook/useWallet";
import { useState } from "react";

export default function Home() {
  const { connectWallet } = useWallet();
  const [walletAddress, setWalletAddress] = useState("");
  const [mint, setMint] = useState(false);

  const handleConnect = async () => {
    const result = await connectWallet();
    if (result) {
      setWalletAddress(result.address);
    }
  };
  return (
    <div>
      <header>
        <button onClick={handleConnect}>
          {walletAddress ? walletAddress : "Connect Wallet"}
        </button>
        {
          walletAddress && (
            <div>
              <MintNFT setMint={setMint}/>
            </div>
          )
        }
        {
          walletAddress && <div>
            <TotalListedNFTs mint={mint}/>
          </div>
        }
      </header>
    </div>
  );
}
