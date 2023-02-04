import React from "react";
import styles from "../styles/register.module.css";
import Nav from "@/components/Nav";
import Link from "next/link";
import Verifymodal from "@/components/Verifymodal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { BiErrorCircle } from "react-icons/bi";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormInput {
  username: string;
  email: string;
  password: string;
}
const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().max(16).min(8),
});

const Signup = ({ setName, currentModal }: any) => {
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const timer: any = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  let resMessage;

  const onSubmit = (data: FormInput) => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios
      .post(
        "https://web-production-3251.up.railway.app/v1/auth-user/create/",
        data
      )
      .then((res: any) => {
        // document.cookie = `ID=${res.data._id}; expires=Thu, 22 Dec 2022 12:00:00 UTC;`;
        // console.log(res?.data?.message);
        toast.success(`${res?.data?.message}`);

        router.push("/shop");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
      });
  };

  return (
    <div className={styles.sign}>
      {verify ? <Verifymodal /> : null}
      <ToastContainer />
      <Nav setName={setName} currentModal={currentModal} />

      <div className={styles.signCap}>
        <img src="/pi.png" alt="chair" />

        <div className={styles.signInput}>
          <h3>Create Accout</h3>
          <p>
            Already have an existing account?
            <Link href="/signin">Log-In</Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.input}>
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
            />
            <input type="email" {...register("email")} placeholder="Email" />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <input type="password" placeholder="Confirm Password" />
            <div className="check">
              <input type="checkbox" name="" id="" />
              <p>
                Receive newsletters & promotional email from us, to stay
                informed
              </p>
            </div>
            <button type="submit">
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <p>Or Register with:</p>

          <div className={styles.img}>
            <img src="/pi8.png" alt="chair" />
            <img src="/pi9.png" alt="chair" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
