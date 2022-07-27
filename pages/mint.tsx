import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useNFTDrop, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { ethers } from "ethers";

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


    // Use Ethers to get contract
    // 

    

    /*
    const nftContract = new ethers.Contract(
        NFT_COLLECTION_ADDRESS,
        marketplaceContractAbi,
        provider
    );*/


    return (

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <a className={styles.mainButton}>
                Mint
            </a>

            <div>
                {nfts?.map((nft, id) => (
                    <>
                    <ThirdwebNftMedia key={id} metadata={nft.metadata} />
                    <h3>{nft.metadata.name}</h3>
                    </>
                ))}
            </div>
            
        </div>
    )
}

export default Mint;