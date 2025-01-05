import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../config";

export const useContract = async (signer: ethers.Signer) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return contract;
};
