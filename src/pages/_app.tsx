import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function App({ Component, pageProps }: AppProps) {
  const [currentModal, setCurrentModal] = useState("Shop");
  const [currentSellModal, setCurrentSellModal] = useState("Register");
  const [navActive, setNavActive] = useState("1")
      const [productDatails, setProductDetails] = useState();
      const [showDetails, setShowDetails] = useState(false);

  const handleActive = (e:any) => {
    setNavActive(e.target.id)
  }

  const router = useRouter();


    const handleClick = (item: any) => {
      setProductDetails(item);
      router.push('productdetails')
      // setShowDetails(true);
    };
  const setName = (name: string) => {
    setCurrentModal(name);
  };
    const setModalName = (namee: string) => {
      setCurrentSellModal(namee);
    };


  return (
    <Component
      handleActive={handleActive}
      setModalName={setModalName}
      navActive={navActive}
      setName={setName}
      currentSellModal={currentSellModal}
      currentModal={currentModal}
      handleClick= {handleClick}
      productDatails = {productDatails}
      showDetails= {showDetails}
      {...pageProps}
    />
  );
}
