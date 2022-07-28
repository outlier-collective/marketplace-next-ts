import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useNFTDrop, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { ethers, utils } from "ethers";
import NumericInput from 'react-numeric-input';

import abi from '../contractAbi.json';

// TASKS 
/* 
    Mint Starter Kit
    View Starter Kits
    Buy Booster Kit
    View Booster Kits
    Choose a starter Kit
    Choose a booster kit
    Choose an item from booster kit
    Submit selections
    Show new fresh starter Kit
    Use Starter Kit to Summon Val
*/


// ROLL
/*
    Read random traits from contract
    Produce output
    Send to component
*/


// MINT

/*
const nftDrop = useNFTDrop(<ContractAddress>);
const {
  mutate: mintNft,
  isLoading,
  error,
} = useMintNFT(nftDrop);

if (error) {
  console.error("failed to mint nft", error);
}
*/

/*
const PROVIDER_URL = process.env.PROVIDER_URL_RINKEBY;
const NFT_COLLECTION_ADDRESS = process.env.NFT_COLLECTION_ADDRESS_RINKEBY;
*/




const Mint: NextPage = () => {

    async function getContract() {
        const PROVIDER_URL = "https://rinkeby.infura.io/v3/";
        const NFT_COLLECTION_ADDRESS = "0x231679569a0775a9f40dbb096f931a29cdbc2485";


        const marketplaceContractAbi = abi;
        const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL)

        const nftContract = new ethers.Contract(
            NFT_COLLECTION_ADDRESS,
            marketplaceContractAbi,
            provider
        )

        return nftContract

    }

    let contract = getContract();

    console.log(contract.maxMint)

    // Use Ethers to get contract
    // 
    /*
    const nftContract = new ethers.Contract(
        NFT_COLLECTION_ADDRESS,
        marketplaceContractAbi,
        provider
    );*/

    // TODO: MAKE PART OF ENV

    return (

        <div className="w-[100vw] flex justify-center items-center pt-64">

            <div className="text-center">
                <h2>Mint Starter Kit</h2>

                <div className="w-72 h-72 bg-[#e8e8e8] mb-4"></div>

                <NumericInput min={0} max={100} value={50} className="form-control mb-4 text-black"/>

                <a className={styles.mainButton}>
                    Mint
                </a>
            </div>

        </div>
    )
}

export default Mint;