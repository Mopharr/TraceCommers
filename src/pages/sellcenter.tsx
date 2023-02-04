import Nav from "@/components/Nav";
import React, { useState } from "react";
import styles from "../styles/center.module.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import RegisterBusiness from "@/components/Register";
import BusinessRegister from "@/components/Business";
import Additional from "@/components/Additional";
import SellModal from "@/components/sellModal";

const Sellcenter = ({
  currentModal,
  setName,
  setModalName,
  currentSellModal,
}: any) => {
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const render = () => {
    switch (step) {
      case 1:
        return <RegisterBusiness nextStep={nextStep} />;

      case 2:
        return <BusinessRegister nextStep={nextStep} />;

      case 3:
        return <Additional nextStep={nextStep} />;

      default:
        return <RegisterBusiness />;
    }
  };

  return (
    <div className={styles.center}>
      <Nav setName={setName} currentModal={currentModal} />

      <div className={styles.top}>
        <div className={styles.text}>
          <h3>Seller Center</h3>
          <p>Fill the below spaces to register as a seller</p>
        </div>
        <div className={styles.modalList}>
          <p onClick={handleModal}>
            <Link href="">{currentSellModal}</Link>
          </p>
          {modal ? <SellModal setModalName={setModalName} /> : null}
        </div>
      </div>
      <div className={styles.line}></div>

      {render()}
      <button onClick={nextStep}>next</button>
    </div>
  );
};

export default Sellcenter;