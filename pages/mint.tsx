import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

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


const Mint: NextPage = () => {


  
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <a className={styles.mainButton}>
                Mint
            </a>
        </div>
    )
}

export default Mint;