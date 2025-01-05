import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useWallet } from "@/Hook/useWallet";
import { useContract } from "@/Hook/useContract";
import Image from "next/image";

const TotalListedNFTs = () => {
    const { connectWallet } = useWallet();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [listedNFTs, setListedNFTs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [walletConnected, setWalletConnected] = useState<boolean>(false); // New state for wallet connection status

    // Function to fetch metadata and image from tokenURI
    const fetchImageFromMetadata = async (tokenURI: string) => {
        try {
            const response = await fetch(tokenURI);
            const metadata = await response.json();
            return metadata.image; // Return the image URL from metadata
        } catch (error) {
            console.error("Error fetching metadata:", error);
            return ""; // Return empty if error occurs
        }
    };

    useEffect(() => {
        const fetchListedNFTs = async () => {
            setLoading(true);
            try {
                const wallet = await connectWallet();
                if (!wallet) {
                    alert("Wallet connection failed!");
                    setLoading(false);
                    return;
                }

                setWalletConnected(true); // Set the wallet connected status to true once the wallet is connected

                const { signer } = wallet;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const contract = await useContract(signer);

                // Call the `getListedNFTs` function from the smart contract
                const nfts = await contract.getListedNFTs();
                
                // Fetch image URLs for each NFT
                const nftsWithImages = await Promise.all(
                    nfts.map(async (nft: string[]) => {
                        // Fetch image URL from the tokenURI
                        const image = await fetchImageFromMetadata(nft[4]); // The 4th item in the NFT object is the tokenURI
                        return { ...nft, image }; // Add the image URL to each NFT
                    })
                );

                setListedNFTs(nftsWithImages);
            } catch (error) {
                console.error("Error fetching listed NFTs:", error);
            } finally {
                setLoading(false);
            }
        };

        if (!walletConnected) {
            fetchListedNFTs();
        }
    }, [connectWallet, walletConnected]);

    return (
        <div>
            <h2>Listed NFTs</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {listedNFTs.length === 0 ? (
                        <p>No NFTs are currently listed for sale.</p>
                    ) : (
                        <div>
                            {listedNFTs.map((nft, index) => (
                                <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
                                    {/* Display NFT Image */}
                                    <div>
                                        <Image
                                            src={nft.image || "https://via.placeholder.com/100"} // If no image is found, fallback to a placeholder
                                            alt={`NFT ${nft.tokenId}`}
                                            height={200}
                                            width={200}
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>

                                    <p><strong>Token ID:</strong> {nft[0]}</p>
                                    <p><strong>Price:</strong> {ethers.formatEther(nft[1])} AVAX</p>
                                    <p><strong>Creator:</strong> {nft[2]}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TotalListedNFTs;
