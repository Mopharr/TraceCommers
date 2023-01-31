import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [currentModal, setCurrentModal] = useState("Shop");
  const [navActive, setNavActive] = useState("1")

  const handleActive = (e:any) => {
    setNavActive(e.target.id)
  }

  const setName = (name: string) => {
    setCurrentModal(name);
  };


  return (
    <Component handleActive = {handleActive} navActive={navActive} setName={setName} currentModal={currentModal} {...pageProps} />
  );
}
