import React from "react";
import styles from "../styles/modal.module.css";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";

interface FormInput {
  username: string;
}

const Verifymodal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalValue}>
        <FaTimes className={styles.modalIcon} />

        <form className={styles.cont}>
          <h2>Verify your email address</h2>
          <p>
            Check your email to view the verification code sent. Verification
            code expires in: <span>120 secs</span>
          </p>
          <input maxLength={6} type="tel" placeholder="Enter Code" />
          <button>Verify Email & Continue</button>
          <h5>Resend Verification Code</h5>
        </form>
      </div>
    </div>
  );
};

export default Verifymodal;
