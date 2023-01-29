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

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const timer: any = useRef();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
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
        resMessage = res?.data?.message;
        setSuccess(true);
        // setVerify(true);
        router.push('/shop')
        timer.current = window.setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 4000);
      });
  };

  return (
    <div className={styles.sign}>
      {verify ? <Verifymodal /> : null}

      <Nav />
      {success ? (
        <p className={styles.message}>
          <GrFormCheckmark className={styles.messageIcon} /> {resMessage} login
          was successful
        </p>
      ) : null}

      {err ? (
        <div className={success ? "none" : "show"}>
          <p className={styles.error}>
            <BiErrorCircle className={styles.messageIcon} />
            login failed
          </p>
        </div>
      ) : null}
      <div className={styles.signCap}>
        <img src="/pi.png" alt="" />

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

            <button type="submit">
              {" "}
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <p>Or Register with:</p>

          <div className={styles.img}>
            <img src="/pi8.png" alt="" />
            <img src="/pi9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
